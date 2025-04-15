<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dashboard;

Route::get('/', [Dashboard::class, 'index'])->name('home');
