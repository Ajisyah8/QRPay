<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard;

Route::prefix('v1')->group(function () {
    Route::get('/heroes', [Dashboard::class, 'apiHeroes']);
    Route::get('/layanans', [Dashboard::class, 'apiLayanans']);
    Route::get('/liburans', [Dashboard::class, 'apiLiburans']);
    Route::get('/promos', [Dashboard::class, 'apiPromos']);
});
