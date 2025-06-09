<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Filament\Models\Contracts\FilamentUser; // Pastikan interface ini diimpor
use Filament\Panel; // Pastikan Panel diimpor

// Pastikan relasi ke model Promo, Layanan, dan Liburan ada
use App\Models\Promo;
use App\Models\Layanan;
use App\Models\Liburan;

class User extends Authenticatable implements FilamentUser // Implementasi FilamentUser
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Relasi ke promo, layanan, liburan
    public function promos(): HasMany
    {
        return $this->hasMany(Promo::class);
    }

    public function layanans(): HasMany
    {
        return $this->hasMany(Layanan::class);
    }

    public function liburans(): HasMany
    {
        return $this->hasMany(Liburan::class);
    }

    /**
     * Method untuk menentukan akses ke panel Filament
     *
     * @param Panel $panel
     * @return bool
     */
    public function canAccessPanel(Panel $panel): bool
    {
        // Logika untuk menentukan siapa yang dapat mengakses panel Filament
        return str_ends_with($this->email, '@gmail.com'); // Mengizinkan hanya pengguna dengan email @gmail.com
    }
}