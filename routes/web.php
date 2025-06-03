<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dashboard;

Route::get('/', [Dashboard::class, 'index'])->name('home');
Route::get('/Kemitraan', function () {
    return Inertia::render('Kemitraan');
})->name('Kemitraan');
Route::get('/form-registrasi-agen', function () {
    return Inertia::render('FormRegistrasiAgen');
});
Route::get('/terms', function () {
    return Inertia::render('Terms');
});

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
});

Route::get('/legal', function () {
    return Inertia::render('Legal');
});

Route::get('/accessibility', function () {
    return Inertia::render('Accessibility');
});