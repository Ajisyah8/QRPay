import React from 'react';

const Accessibility = () => {
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
          Pernyataan Aksesibilitas QRPay
        </h1>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">1. Komitmen Kami</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            QRPay berkomitmen untuk memastikan aksesibilitas situs web kami bagi semua pengguna, termasuk pengguna dengan disabilitas. Kami berusaha terus meningkatkan kenyamanan dan kegunaan situs kami sesuai dengan pedoman aksesibilitas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">2. Standar Aksesibilitas</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Kami mengacu pada Pedoman Aksesibilitas Konten Web (WCAG) 2.1 level AA sebagai dasar upaya kami untuk menyediakan pengalaman web yang inklusif.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">3. Langkah yang Telah Diambil</h2>
          <ul className="list-disc pl-5 text-sm sm:text-base text-[#444] space-y-2">
            <li>Penggunaan teks alternatif untuk gambar.</li>
            <li>Struktur heading yang semantik untuk membantu navigasi.</li>
            <li>Kontras warna yang cukup antara teks dan latar belakang.</li>
            <li>Navigasi yang dapat diakses menggunakan keyboard.</li>
            <li>Responsif di berbagai perangkat dan resolusi layar.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">4. Kendala Aksesibilitas</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Meskipun kami telah berusaha sebaik mungkin, beberapa konten mungkin belum sepenuhnya memenuhi standar aksesibilitas. Kami terus bekerja untuk memperbaikinya.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#222]">5. Hubungi Kami</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#444]">
            Jika Anda mengalami kesulitan dalam mengakses bagian mana pun dari situs kami atau memiliki saran untuk peningkatan aksesibilitas, silakan hubungi kami di:{' '}
            <a href="mailto:qrpayonlines@gmail.com" className="text-[#EF018F] underline">support@qrpay.co.id</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Accessibility;
