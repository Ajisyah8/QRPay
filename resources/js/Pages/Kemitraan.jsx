import { useEffect, useState } from 'react';
import Veloticket from './assets/Ticket.png';

const Kemitraan = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100);
    }, []);

    return (
        <div
            className="flex min-h-screen w-full items-center justify-center bg-gray-50"
            style={{ background: 'linear-gradient(180deg, #8FD8FA 40%, #fff 100%)', fontFamily: 'DM Sans, sans-serif' }}
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-8 px-2 sm:px-4 py-8 md:py-0 mt-24 md:mt-40 lg:mt-20">
                <div
                    className={`flex flex-1 flex-col items-center justify-center text-center transition-all duration-1000 md:items-start md:text-left ${show ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionProperty: 'opacity, transform' }}
                >
                    <h1 className="mb-4 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Bergabung Menjadi Agen <span className="text-[#EF018F]">QRPay</span>
                    </h1>
                    <p className="mb-6 text-base sm:text-lg md:text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Raih peluang bisnis digital bersama QRPay! Daftarkan dirimu sebagai agen dan nikmati berbagai keuntungan, kemudahan transaksi,
                        serta dukungan penuh dari tim kami. Jadilah bagian dari ekosistem pembayaran modern Indonesia.
                    </p>
                    <a
                        href="/form-registrasi-agen"
                        className="inline-block rounded-full bg-[#EF018F] px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-pink-600"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        Daftar Agen QRPay Sekarang
                    </a>
                </div>
                <div
                    className={`flex flex-1 items-center justify-center transition-all duration-1000 ${show ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    style={{ transitionProperty: 'opacity, transform' }}
                >
                    <img
                        src={Veloticket}
                        alt="VeloTicket"
                        className="mx-auto max-h-[260px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[500px] w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] object-contain"
                        style={{ display: 'block' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Kemitraan;
