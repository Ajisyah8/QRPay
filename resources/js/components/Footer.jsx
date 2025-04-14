import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Nature from './assets/Footer.png';
import Playstore from './assets/playstore.png';
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
                                <FaMapMarkerAlt className="mt-1 text-gray-700" />
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Jl. Bukit Barisan No. 12A, Kota Tanjungpinang –<br />
                                    Provinsi Kepulauan Riau, 29124
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-gray-700" />
                                <p className="text-sm text-gray-700">qrpayonlines@gmail.com</p>
                            </div>
                            <div className="mt-10">
                                <h4 className="mb-3 font-semibold text-gray-900">Follow us</h4>
                                <div className="flex space-x-4 text-xl text-gray-600">
                                    <a
                                        href="https://www.facebook.com/people/Qrpaycoid/pfbid02bgksaSKXgb5Nrv9th2v4tyAazdKpVszwBiw2NbHh3eDamonyX78T4ziGj3k7FM1Kl/"
                                        className="hover:text-[#1877F2]"
                                        target="_blank"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="http://www.youtube.com/@qrpayonline" className="hover:text-[#FF0000]" target="_blank">
                                        <FaYoutube />
                                    </a>
                                    <a href="https://www.instagram.com/qrpay.co.id" className="hover:text-[#E4405F]" target="_blank">
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
                                <a
                                    href="/"
                                    className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://velotiket.com/velosiqrpay"
                                    className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    Booking Ticket
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://store.qrpay.co.id/"
                                    className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    QRPay Store
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://velotiket.com/velosiqrpay/cek-pemesanan"
                                    className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    Cek Pemesanan
                                </a>
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
                            <a
                                href="https://velotiket.com/velosiqrpay"
                                className="relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                Tiket Pesawat
                            </a>
                            <a
                                href="https://velotiket.com/velosiqrpay"
                                className="relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                Tiket Kereta Api
                            </a>
                            <a
                                href="https://velotiket.com/velosiqrpay"
                                className="relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                Tiket Pelni
                            </a>
                            <a
                                href="https://velotiket.com/velosiqrpay"
                                className="relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                Tiket Hotel
                            </a>
                        </div>
                        <div className="mt-24">
                            <a href="#" className="inline-block">
                                <img src={Playstore} alt="Get it on Google Play" className="h-12" />
                            </a>
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
