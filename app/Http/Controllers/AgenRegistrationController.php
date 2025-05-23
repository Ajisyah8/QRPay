<?php

namespace App\Http\Controllers;

use App\Models\AgenRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AgenRegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'jenis' => 'required|string',
            'username' => 'nullable|string',
            'email' => 'required|email',
            'nama' => 'required|string',
            'hp_utama' => 'required|string',
            'hp_alternatif' => 'nullable|string',
            'alamat' => 'required|string',
            'provinsi' => 'nullable|string',
            'nama_usaha' => 'nullable|string',
        ]);

        $agen = AgenRegistration::create($validated);

        Mail::raw(
            "Pendaftaran Agen QRPay Baru:\n\n" .
                "Jenis: {$agen->jenis}\n" .
                "Username: {$agen->username}\n" .
                "Email: {$agen->email}\n" .
                "Nama: {$agen->nama}\n" .
                "HP Utama: {$agen->hp_utama}\n" .
                "HP Alternatif: {$agen->hp_alternatif}\n" .
                "Alamat: {$agen->alamat}\n" .
                "Provinsi: {$agen->provinsi}\n" .
                "Nama Usaha: {$agen->nama_usaha}\n",
            function ($message) {
                $message->to('qrpayonlines@gmail.com')
                    ->subject('Pendaftaran Agen QRPay Baru');
            }
        );
        return response()->json(['success' => true]);
    }
}
