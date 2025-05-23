<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
class ProvinceController extends Controller
{
    public function index()
    {
        $response = Http::get('https://wilayah.id/api/provinces.json');
        return response($response->body(), 200, ['Content-Type' => 'application/json']);
    }
}