import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen flex items-center justify-center mt-10 py-12 px-2 lg:mt-20" style={{ background: 'linear-gradient(180deg, #8FD8FA 40%, #fff 100%)', fontFamily: 'DM Sans, sans-serif' }}>
            <div className="w-full max-w-6xl rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl p-8 sm:p-16 border border-[#E0E7EF] animate-fade-in">
                <h1 className="text-xl sm:text-2xl font-extrabold mb-10 text-center text-[#EF018F] drop-shadow-lg tracking-tight">Syarat dan Ketentuan QRPay</h1>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">1. Pendahuluan</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Syarat dan ketentuan ini wajib dibaca sebelum menggunakan situs QRPay. Dengan mengakses dan menggunakan website serta layanan QRPay, Anda dianggap telah memahami, menyetujui, dan tunduk pada syarat dan ketentuan ini.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">2. Deskripsi Umum</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Situs QRPay dioperasikan dan dimiliki oleh PT QRPay Indonesia ("Kami" atau "QRPay"). QRPay menyediakan sistem dan fasilitas pemesanan online terintegrasi untuk berbagai layanan pembayaran digital.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">3. Hak Kekayaan Intelektual</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Seluruh konten di situs QRPay, termasuk namun tidak terbatas pada perangkat lunak, teks, data, grafik, gambar, suara, video, logo, ikon, dan kode, merupakan milik PT QRPay Indonesia atau pihak ketiga yang memberikan lisensi kepada kami. Dilarang mempublikasikan, memodifikasi, menyalin, atau menggandakan konten tanpa izin tertulis dari PT QRPay Indonesia.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">4. Pemesanan dan Penggunaan Layanan</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Anda dapat menggunakan layanan QRPay untuk melakukan transaksi pembayaran yang sah. Dilarang menggunakan layanan untuk tujuan spekulasi, penipuan, atau aktivitas yang melanggar hukum. QRPay berhak membatalkan transaksi yang dianggap tidak sah atau melanggar ketentuan.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">5. Harga, Pembayaran, dan Konfirmasi</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Semua harga layanan dapat berubah sewaktu-waktu tanpa pemberitahuan. Pembayaran hanya dapat dilakukan melalui metode yang disediakan QRPay. Pastikan data yang diberikan saat konfirmasi pembayaran adalah benar dan valid.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">6. Perubahan dan Pembatalan</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Perubahan atau pembatalan transaksi mengikuti kebijakan masing-masing penyedia layanan. QRPay tidak bertanggung jawab atas perubahan atau pembatalan yang dilakukan oleh pihak ketiga.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">7. Batas Tanggung Jawab</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        QRPay tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan situs atau layanan QRPay di luar kendali kami.
                    </p>
                </section>
                <section>
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">8. Hukum yang Berlaku</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#444]">
                        Syarat dan ketentuan ini diatur oleh hukum yang berlaku di Indonesia.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;