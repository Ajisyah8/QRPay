import { useEffect, useState } from 'react';
import Logo from './assets/qrpay.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-[#8FD8FA]'
            } py-4 font-['DM_Sans']`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <a href="/">
                        <img src={Logo} alt="QRPay Logo" className="h-15" />
                    </a>
                </div>

                <ul className="flex space-x-10 font-medium text-black">
                    <li className="group relative">
                        <a
                            href="/"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://store.qrpay.co.id/"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            QRPay Store
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://velotiket.com/velosiqrpay"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Booking Tiket
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://velotiket.com/velosiqrpay/cek-pemesanan"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Cek Pemesanan
                        </a>
                    </li>
                </ul>

                <button className="cursor-pointer rounded-full bg-[#EF018F] px-4 py-2 text-white shadow-md transition duration-200 hover:bg-pink-600">
                    <a
                        href="https://wa.me/6282288334682?text=Halo%20QRPay%2C%20saya%20tertarik%20untuk%20bekerjasama%20dengan%20QRPay.%20Boleh%20info%20lebih%20lanjut%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer rounded-full bg-[#EF018F] px-4 py-2 text-white shadow-md transition duration-200 hover:bg-pink-600"
                    >
                        QRPay Synergy
                    </a>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
