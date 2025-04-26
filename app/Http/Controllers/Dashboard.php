<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hero;
use App\Models\Layanan;
use App\Models\Promo;
use App\Models\Liburan;
// use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;


class Dashboard extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'heroes' => Hero::orderBy('id', 'asc')->get()->map(function ($hero) {
                $hero->description = Str::words(strip_tags($hero->description), 19, '...');
                $hero->name = Str::words($hero->name, 6, '...');
                return $hero;
            }),
            'layanans' => Layanan::orderBy('id', 'asc')->get(),
            'liburans' => Liburan::with('user')->latest()->get(),
            'promos' => Promo::where('status', 'on')->latest()->get(),
        ]);
    }

    // RESTful API Endpoints
    public function apiHeroes()
    {
        return response()->json(Hero::orderBy('id', 'asc')->get());
    }

    public function apiLayanans()
    {
        return response()->json(Layanan::orderBy('id', 'asc')->get());
    }

    public function apiLiburans()
    {
        return response()->json(Liburan::with('user')->latest()->get());
    }

    public function apiPromos()
    {
        $promos = Promo::where('status', 'on')->latest()->get();

        // Menambahkan URL lengkap untuk setiap gambar
        foreach ($promos as $promo) {
            $promo->gambar = asset('storage/' . $promo->gambar);
        }

        return response()->json($promos);
    }
}
