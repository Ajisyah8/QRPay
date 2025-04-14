<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hero extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'hero';

    protected $fillable = [
        'name',
        'icon',
        'link',
        'gambar',
    ];

    protected $dates = ['deleted_at'];
}

