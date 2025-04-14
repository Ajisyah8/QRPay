import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Nature from './assets/Footer.png';
import Logo from './assets/qrpay.png';

const Footer = () => {
    return (
        <footer className="font-['DM Sans'] relative overflow-hidden bg-white pt-12 pb-[200px]">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <div>
                        <img src={Logo} alt="QRPay Logo" className="mb-4 h-10" />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2">
                                <span className="text-sm text-gray-700">📍</span>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Jl. Bukit Barisan No. 12A, Kota Tanjungpinang –<br />
                                    Provinsi Kepulauan Riau, 29124
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-700">✉️</span>
                                <p className="text-sm text-gray-700">qrpayonlines@gmail.com</p>
                            </div>
                            <div className="mt-10">
                                <h4 className="mb-3 font-semibold text-gray-900">Follow us</h4>
                                <div className="flex space-x-4 text-xl text-gray-600">
                                    <a href="#" className="hover:text-[#1877F2]">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="hover:text-[#1DA1F2]">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="hover:text-[#FF0000]">
                                        <FaYoutube />
                                    </a>
                                    <a href="#" className="hover:text-[#E4405F]">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="mb-3 font-semibold text-gray-900">Useful Links</h4>
                        <ul className="mb-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Booking Ticket</a>
                            </li>
                            <li>
                                <a href="#">QRPay Store</a>
                            </li>
                            <li>
                                <a href="#">Cek Pemesanan</a>
                            </li>
                        </ul>
                        <div>
                            <div className="mt-16">
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="text-black" />
                                    <span className="text-sm font-semibold text-gray-700">Need help? Call us</span>
                                </div>
                                <p className="mt-2 text-lg font-bold text-[#0076E8]">0822 – 8833 – 4682</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-3 font-semibold text-gray-900">Menu Terkait</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <a href="#">Tiket Pesawat</a>
                            <a href="#">Tiket Kereta Api</a>
                            <a href="#">Tiket Pelni</a>
                            <a href="#">Tiket Hotel</a>
                        </div>
                    </div>
                </div>

                <hr className="my-5 border-gray-300" />

                <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
                    <p>© 2025 QRPay Inc. All rights reserved.</p>
                    <div className="mt-2 flex space-x-4 md:mt-0">
                        <a href="#">Terms</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Legal notice</a>
                        <a href="#">Accessibility</a>
                    </div>
                </div>
            </div>
            <img src={Nature} alt="Footer Illustration" className="absolute bottom-0 left-0 w-full object-cover" style={{ zIndex: 0 }} />
        </footer>
    );
};

export default Footer;
