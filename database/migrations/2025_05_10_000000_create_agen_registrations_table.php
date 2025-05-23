<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('agen_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('jenis')->default('Basic');
            $table->string('username')->nullable();
            $table->string('email');
            $table->string('nama');
            $table->string('hp_utama');
            $table->string('hp_alternatif')->nullable();
            $table->text('alamat');
            $table->string('provinsi')->nullable();
            $table->string('nama_usaha')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('agen_registrations');
    }
};
