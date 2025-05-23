<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgenRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'jenis',
        'username',
        'email',
        'nama',
        'hp_utama',
        'hp_alternatif',
        'alamat',
        'provinsi',
        'nama_usaha',
    ];
}
