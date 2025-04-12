import Logo from './assets/qrpay.png';

const Navbar = () => {
    return (
        <nav className="bg-[#8FD8FA] py-4 font-['DM_Sans'] shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="QRPay Logo" className="h-15" />
                </div>

                <ul className="flex space-x-10 font-medium text-black">
                    <li className="group relative">
                        <a
                            href="#"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            QRPay Store
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Booking Tiket
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-shadow relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#EF018F] after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Cek Pemesanan
                        </a>
                    </li>
                </ul>

                <button className="cursor-pointer rounded-full bg-[#EF018F] px-4 py-2 text-white shadow-md transition duration-200 hover:bg-pink-600">
                    QRPay Synergy
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
