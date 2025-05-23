<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\PulsaController;
use App\Http\Controllers\PlnController;
use App\Http\Controllers\EwalletController;
use App\Http\Controllers\AgenRegistrationController;
use App\Http\Controllers\ProvinceController;


Route::prefix('v1')->group(function () {
    Route::get('/heroes', [Dashboard::class, 'apiHeroes']);
    Route::get('/layanans', [Dashboard::class, 'apiLayanans']);
    Route::get('/liburans', [Dashboard::class, 'apiLiburans']);
    Route::get('/promos', [Dashboard::class, 'apiPromos']);
    Route::post('/beli-pulsa', [PulsaController::class, 'beliPulsa']);
    Route::get('/cek-status-pulsa/{ref_id}', [PulsaController::class, 'checkStatus']);
    Route::post('/webhook-xendit', [PulsaController::class, 'webhookHandler']);
    Route::post('/beli-token', [PlnController::class, 'beliToken']);
    Route::get('/pricelist', [PulsaController::class, 'getPulsaPriceList']);
    Route::get('/pricelist-token', [PlnController::class, 'getPriceListToken']);
    Route::post('/cek-tagihan', [PlnController::class, 'cekTagihan']);
    Route::get('/cek-status/{ref_id}', [PlnController::class, 'cekStatus']);
    Route::post('/webhook', [PlnController::class, 'plnWebhookHandler']);
    Route::post('/beliewallet', [EwalletController::class, 'beliEwallet']);
    Route::get('/status-ewallet/{ref_id}', [EwalletController::class, 'cekStatusEwallet']);
    Route::post('/ewalletwebhook', [EwalletController::class, 'ewalletWebhookHandler']);
    Route::post('/registrasi-agen', [AgenRegistrationController::class, 'store']);
    Route::get('/provinces', [ProvinceController::class, 'index']);
});
