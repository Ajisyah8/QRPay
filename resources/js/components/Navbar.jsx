import { useEffect, useState } from 'react';
import Logo from './assets/qrpay.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            } py-2 font-['DM_Sans'] sm:py-3 md:py-4`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <a href="/">
                        <img src={Logo} alt="QRPay Logo" className="h-10 w-auto sm:h-12 md:h-15" />
                    </a>
                </div>

                <button 
                    className="p-2 text-black lg:hidden" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden space-x-6 font-medium text-black lg:flex xl:space-x-10">
                    {['Home', 'QRPay Store', 'Booking Tiket', 'Cek Pemesanan'].map((item, index) => (
                        <li key={index} className="group relative">
                            <a
                                href={
                                    index === 0
                                        ? '/'
                                        : index === 1
                                          ? 'https://store.qrpay.co.id/'
                                          : index === 2
                                            ? 'https://velotiket.com/velosiqrpay'
                                            : 'https://velotiket.com/velosiqrpay/cek-pemesanan'
                                }
                                className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                     <div className="flex justify-end p-4">
                        <button 
                            onClick={() => setIsMenuOpen(false)} 
                            className="p-2 text-black"
                            aria-label="Close navigation menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col items-center space-y-6 pt-10">
                        {['Home', 'QRPay Store', 'Booking Tiket', 'Cek Pemesanan'].map((item, index) => (
                            <li key={index} className="w-full text-center">
                                <a
                                    href={
                                        index === 0
                                            ? '/'
                                            : index === 1
                                              ? 'https://store.qrpay.co.id/'
                                              : index === 2
                                                ? 'https://velotiket.com/velosiqrpay'
                                                : 'https://velotiket.com/velosiqrpay/cek-pemesanan'
                                    }
                                    className="block px-4 py-2 text-lg text-black hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li className="w-full px-4 pt-4">
                        <a
                                href="https://wa.me/6282288334682?text=Halo%20QRPay%2C%20saya%20tertarik%20untuk%20bekerjasama%20dengan%20QRPay.%20Boleh%20info%20lebih%20lanjut%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full cursor-pointer rounded-full bg-[#CC0178] px-4 py-2 text-center text-white shadow-md transition duration-200 hover:bg-[#A30160]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                QRPay Synergy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Desktop Button */}
                <a
                    href="https://wa.me/6282288334682?text=Halo%20QRPay%2C%20saya%20tertarik%20untuk%20bekerjasama%20dengan%20QRPay.%20Boleh%20info%20lebih%20lanjut%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden cursor-pointer rounded-full bg-[#EF018F] px-4 py-2 text-sm text-white shadow-md transition duration-200 hover:bg-pink-600 sm:text-base lg:block"
                >
                    QRPay Synergy
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
