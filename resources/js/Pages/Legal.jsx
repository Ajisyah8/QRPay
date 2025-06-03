import React from 'react';

const LegalNotice = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center mt-10 py-12 px-2 lg:mt-20"
      style={{
        background: 'linear-gradient(180deg, #8FD8FA 40%, #fff 100%)',
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <div className="w-full max-w-6xl rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl p-8 sm:p-16 border border-[#E0E7EF] animate-fade-in">
        <h1 className="text-xl sm:text-2xl font-extrabold mb-10 text-center text-[#EF018F] drop-shadow-lg tracking-tight">
          Pemberitahuan Hukum QRPay
        </h1>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">1. Informasi Perusahaan</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Situs ini dimiliki dan dioperasikan oleh QRPay, sebuah perusahaan yang terdaftar secara sah di Indonesia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">2. Tanggung Jawab Konten</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kami berupaya menjaga keakuratan dan keterkinian semua informasi yang disediakan di situs ini. Namun, kami tidak bertanggung jawab atas kesalahan, kelalaian, atau keterlambatan dalam memperbarui informasi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">3. Hak Cipta dan Kekayaan Intelektual</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Semua materi di situs ini, termasuk teks, gambar, grafik, logo, ikon, dan kode, dilindungi oleh undang-undang hak cipta dan tidak boleh disalin, disebarluaskan, atau digunakan kembali tanpa izin tertulis dari PT QRPay Indonesia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">4. Tautan Eksternal</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Situs ini dapat berisi tautan ke situs pihak ketiga. Kami tidak memiliki kendali atas konten atau kebijakan situs tersebut, dan tidak bertanggung jawab atas informasi atau praktik mereka.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">5. Yuridiksi</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Semua hal yang berkaitan dengan situs dan layanan kami tunduk pada hukum yang berlaku di Indonesia. Perselisihan akan diselesaikan melalui mekanisme hukum yang berlaku di wilayah hukum Indonesia.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">6. Kontak</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Untuk pertanyaan hukum atau pelaporan pelanggaran hak cipta, silakan hubungi kami melalui email: <a href="mailto:legal@qrpay.co.id" className="text-[#EF018F] underline">qrpayonlines@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;
