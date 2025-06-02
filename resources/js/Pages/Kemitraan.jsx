import { useEffect, useState } from 'react';
import Veloticket from './assets/Konten.png';

const Kemitraan = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center"
            style={{
                background: 'linear-gradient(180deg, #8FD8FA 40%, #fff 100%)',
                fontFamily: 'DM Sans, sans-serif',
            }}
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl w-full px-6 lg:px-8 py-20 gap-15">
                
                {/* Left Content */}
                <div
    className={`w-full md:w-1/2 transition-all duration-1000 ${
        show ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
    }`}
    style={{ transitionProperty: 'opacity, transform' }}
>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
        Jadi Agen <span className="text-[#EF018F]">QRPay</span> & Raup Cuan!
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
        Bisnis digital kini lebih mudah. Gabung sebagai agen, nikmati komisi fleksibel, fitur lengkap, dan support penuh dari tim kami.
    </p>

    <div className="mb-8">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Kenapa QRPay?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-bold">
        {[
            'Reservasi 24 jam nonstop',
            'Satu akun untuk semua layanan',
            'Harga & kursi transparan',
            'Booking & issued tiket mandiri',
            'Sub-agen tanpa batas & komisi sendiri',
            'Marketing kit & admin fleksibel',
        ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
                <span className="text-[#EF018F] font-bold text-lg leading-none">•</span>
                <span>{item}</span>
            </div>
        ))}
    </div>
</div>

    <a
        href="/form-registrasi-agen"
        className="inline-block rounded-full bg-[#EF018F] px-8 py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:bg-pink-600 transition-all duration-300"
    >
        Daftar Sekarang
    </a>
</div>


                {/* Right Image */}
                <div
                    className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-1000 ${
                        show ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionProperty: 'opacity, transform' }}
                >
                    <img
    src={Veloticket}
    alt="QRPay Agent Illustration"
    className="w-[100%] lg:w-[200%] max-w-[900px] lg:h-[500px] md:h-[500px] object-contain"
/>
                </div>
            </div>
        </div>
    );
};

export default Kemitraan;