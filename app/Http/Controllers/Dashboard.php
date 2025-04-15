<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hero;
use App\Models\Layanan;
// use App\Models\Promo;
use App\Models\Liburan;
use App\Models\User;
use Inertia\Inertia;

class Dashboard extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'heroes' => Hero::latest()->get(),
            'layanans' => Layanan::with('user')->latest()->get(),
            // 'promos' => Promo::with('user')->latest()->get(),
            'liburans' => Liburan::with('user')->latest()->get(),
            'users' => User::latest()->get(),
        ]);
    }
}
