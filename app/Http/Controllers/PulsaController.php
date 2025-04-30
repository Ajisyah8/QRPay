<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Xendit\Configuration;
use Xendit\Invoice\InvoiceApi;
use Xendit\BalanceAndTransaction\BalanceApi;
use Xendit\XenditSdkException;

class PulsaController extends Controller
{
    public function beliPulsa(Request $request)
    {
        $request->validate([
            'phone' => ['required', 'string', 'regex:/^(08|\+628)[0-9]{8,11}$/', 'max:13'],
            'nominal' => 'required|numeric|min:5000|max:1000000',
        ]);

        try {
            Configuration::setXenditKey(config('services.xendit.api_key'));


            $balanceApi = new BalanceApi();
            $balance = $balanceApi->getBalance('CASH', 'IDR');

            if ($balance['balance'] < $request->nominal) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Saldo Xendit tidak mencukupi.'
                ], 400);
            }

            // Buat invoice
            $invoiceApi = new InvoiceApi();

            $params = [
                'external_id' => 'pulsa-' . time(),
                'payer_email' => $request->user()?->email ?? 'guest@qrpay.com',
                'description' => 'Pembelian pulsa untuk ' . $request->phone,
                'amount' => $request->nominal,
                'currency' => 'IDR',
                'success_redirect_url' => route('home'),
                'failure_redirect_url' => route('home')

            ];

            $invoice = $invoiceApi->createInvoice($params);

            return response()->json([
                'status' => 'success',
                'invoice_url' => $invoice['invoice_url'],
                'balance' => $balance['balance']
            ]);
        } catch (XenditSdkException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                'details' => $e->getFullError()
            ], 500);
        }
    }
}
