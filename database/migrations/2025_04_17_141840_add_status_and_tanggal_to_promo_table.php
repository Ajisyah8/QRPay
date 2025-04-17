<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('promo', function (Blueprint $table) {
            $table->enum('status', ['on', 'off'])->default('off')->after('gambar');
            $table->date('tgl_mulai')->nullable()->after('status');
            $table->date('tgl_selesai')->nullable()->after('tgl_mulai');
        });
    }

    public function down(): void
    {
        Schema::table('promo', function (Blueprint $table) {
            $table->dropColumn(['status', 'tgl_mulai', 'tgl_selesai']);
        });
    }
};
