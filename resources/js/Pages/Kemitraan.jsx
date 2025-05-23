import { useEffect, useState } from 'react';
import Veloticket from './assets/Ticket.png';

const Kemitraan = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100);
    }, []);

    return (
        <div
            className={`flex min-h-screen w-full items-center justify-center bg-gray-50`}
            style={{ background: 'linear-gradient(180deg, #8FD8FA 40%, #fff 100%)', fontFamily: 'DM Sans, sans-serif' }}
        >
            <div className="flex h-[80vh] w-full max-w-6xl flex-col-reverse items-center justify-center gap-8 px-4 md:flex-row">
                <div
                    className={`flex flex-1 flex-col items-center justify-center text-center transition-all duration-1000 md:items-start md:text-left ${show ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionProperty: 'opacity, transform' }}
                >
                    <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Bergabung Menjadi Agen <span className="text-[#EF018F]">QRPay</span>
                    </h1>
                    <p className="mb-8 text-lg text-gray-700 md:text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Raih peluang bisnis digital bersama QRPay! Daftarkan dirimu sebagai agen dan nikmati berbagai keuntungan, kemudahan transaksi,
                        serta dukungan penuh dari tim kami. Jadilah bagian dari ekosistem pembayaran modern Indonesia.
                    </p>
                    <a
                        href="/form-registrasi-agen"
                        className="inline-block rounded-full bg-[#EF018F] px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-pink-600"
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
                        className="mx-auto max-h-[500px] w-full max-w-[420px] object-contain"
                        style={{
                            display: 'block',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Kemitraan;
