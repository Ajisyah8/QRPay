import React from 'react';

const PrivacyPolicy = () => {
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
          Kebijakan Privasi QRPay
        </h1>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">1. Pendahuluan</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan situs dan layanan QRPay.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">2. Informasi yang Dikumpulkan</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kami mengumpulkan informasi seperti nama, nomor telepon, alamat email, dan data transaksi saat Anda menggunakan layanan kami. Informasi ini dikumpulkan melalui formulir, transaksi, atau interaksi langsung dengan layanan kami.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">3. Penggunaan Informasi</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Informasi Anda digunakan untuk memproses transaksi, memberikan dukungan pelanggan, serta meningkatkan layanan QRPay. Kami juga dapat menggunakan informasi untuk keperluan komunikasi dan promosi yang relevan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">4. Perlindungan Data</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data pribadi Anda dari akses tidak sah, penggunaan yang tidak sah, atau pengungkapan yang tidak sah.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">5. Pembagian Informasi</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali jika diwajibkan oleh hukum atau untuk keperluan penyediaan layanan yang Anda gunakan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">6. Cookie</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Situs kami dapat menggunakan cookie untuk meningkatkan pengalaman pengguna dan mengumpulkan informasi tentang aktivitas pengunjung di situs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">7. Hak Pengguna</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Anda berhak untuk mengakses, memperbaiki, atau menghapus data pribadi Anda yang kami simpan. Hubungi kami jika Anda ingin menggunakan hak tersebut.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">8. Perubahan Kebijakan</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan diberlakukan setelah dipublikasikan di situs kami. Harap tinjau kebijakan ini secara berkala.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
