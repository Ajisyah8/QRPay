import { Head, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AdModal from '../components/Modal';
import InfiniteScroll from '../components/Quote';
import Tugu from './assets/TuguSirih.png';
import Wave from './assets/Vector 1.png';
import BPJS from './layanan/BPJS.png';

import DompetDigital from './layanan/DompetDigital.png';

import PLN from './layanan/ListrikPLN.png';
import PBB from './layanan/PBB.png';
import PDAM from './layanan/PDAM.png';
import PDAMKepri from './PDAM/PDAM Kepri.png';

import Pulsa from './layanan/Pulsa.png';
import ShuttleBus from './layanan/ShuttleBus.png';

import Kesehatan from './BPJS/BPJS Kesehatan.png';
import Ketenagakerjaan from './BPJS/BPJS Ketenagakerjaan.png';
import Dana from './e-wallet/Dana.png';
import Gopay from './e-wallet/Gopay.png';
import LinkAja from './e-wallet/LinkAja.png';
import OVO from './e-wallet/OVO.png';
import ShopeePay from './e-wallet/Shopeepay.png';
import FF from './games/freefire.png';
import FFMax from './games/freefiremax.png';
import MLBB from './games/mobilelegend.png';
import PUBG from './games/pubg.png';
import TVKabel from './layanan/TV.png';
import VoucherGames from './layanan/Voucher.png';
import AirAsia from './partner/airasia.png';
import BatikAir from './partner/batik air.png';
import Citilink from './partner/citilink.png';
import GarudaIndo from './partner/garuda indonesia.png';
import KAI from './partner/KAI.png';
import LionAir from './partner/lion air.png';
import NamAir from './partner/Nam Air.png';
import PelitaAir from './partner/Pelita_air.png';
import Pelni from './partner/Pelni.png';
import Sriwijaya from './partner/Sriwijaya Air.png';
import SuperAir from './partner/Super Air Jet.png';
import Transnusa from './partner/transnusa.png';
import Trigana from './partner/Trigana Air.png';
import Wings from './partner/wingsair.png';
import Bagan from './world/Bagan.jpg';
import Borobudur from './world/borobudur.jpg';
import Celcus from './world/Celcus.jpg';
import Colloseum from './world/Colloseum.jpg';
import Effiel from './world/Effiel.jpg';
import Masjid from './world/Masjid.jpg';
import Piramida from './world/Piramida.jpg';
import Pisa from './world/Pisa.jpg';
import RedBeach from './world/RedBeach.jpg';
import Tajmahal from './world/Tajmahal.jpg';
import Tembok from './world/Tembok.jpg';
import Torun from './world/Torun.jpg';

const logos = [GarudaIndo, Citilink, SuperAir, Sriwijaya, Trigana, Wings, NamAir, PelitaAir, Pelni, LionAir, KAI, BatikAir];

const items = [
    { content: Bagan },
    { content: Borobudur },
    { content: Celcus },
    { content: Colloseum },
    { content: Effiel },
    { content: Masjid },
    { content: Piramida },
    { content: Pisa },
    { content: RedBeach },
    { content: Tajmahal },
    { content: Tembok },
    { content: Torun },
];

const layananItems = [
    {
        image: ShuttleBus,
        label: 'Shuttle Bus',
        type: 'transportation',
        inputFields: ['rute', 'tanggal', 'jumlah_penumpang'],
    },
    {
        image: Pulsa,
        label: 'Pulsa',
        type: 'pulsa',
        inputFields: ['nomor_telepon', 'nominal'],
    },
    {
        image: PLN,
        label: 'Listrik PLN',
        type: 'pln',
        inputFields: ['nomor_meteran', 'nominal'],
    },
    {
        image: DompetDigital,
        label: 'Dompet Digital',
        type: 'ewallet',
        inputFields: ['jenis_ewallet', 'nomor_tujuan', 'nominal'],
    },
    {
        image: VoucherGames,
        label: 'Voucher Games',
        type: 'games',
        inputFields: ['game', 'user_id', 'nominal'],
    },
    {
        image: BPJS,
        label: 'BPJS',
        type: 'bpjs',
        inputFields: ['nomor_bpjs', 'periode'],
    },
    {
        image: PDAM,
        label: 'PDAM',
        type: 'pdam',
        inputFields: ['nomor_pelanggan'],
    },
    {
        image: TVKabel,
        label: 'TV Kabel',
        type: 'tv',
        inputFields: ['nomor_pelanggan', 'paket'],
    },
    {
        image: PBB,
        label: 'PBB',
        type: 'pbb',
        inputFields: ['nomor_objek_pajak', 'tahun'],
    },
];

const checkInLogos = [
    { logo: GarudaIndo, link: 'https://digital.garuda-indonesia.com/ssci/identification' },
    { logo: LionAir, link: 'https://www.bookcabin.com/check-in' },
    { logo: Citilink, link: 'https://book.citilink.co.id/SearchWebCheckin.aspx' },
    { logo: AirAsia, link: 'https://www.airasia.com/check-in/v2/en/gb' },
    { logo: PelitaAir, link: 'https://pss01.nieve.id/webcheckin/' },
    { logo: Sriwijaya, link: 'https://sriwijaya-webcheckin.nieve.id/new//' },
    { logo: Transnusa, link: 'https://www.transnusa.co.id/id/' },
];

const Home = () => {
    const { heroes, promos, layanans, liburans } = usePage().props;
    const [showAllHeroes, setShowAllHeroes] = useState(false);
    const [showAllLayanans, setShowAllLayanans] = useState(false);
    const [activeFilter, setActiveFilter] = useState('layanan');
    const [showPPOBModal, setShowPPOBModal] = useState(false);
    const [selectedService, setSelectedService] = useState({
        image: Pulsa,
        label: 'Pulsa',
        type: 'pulsa',
        inputFields: ['nomor_telepon', 'nominal'],
    });
    const [selectedNominal, setSelectedNominal] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedOperator, setSelectedOperator] = useState(null);
    const [selectedJenisPLN, setSelectedJenisPLN] = useState('');
    const [meterNumber, setMeterNumber] = useState('');
    const [selectedWallet, setSelectedWallet] = useState(null);
    const [selectedGame, setSelectedGame] = useState(null);
    const [userId, setUserId] = useState('');
    const [selectedBPJSType, setSelectedBPJSType] = useState(null);
    const [bpjsNumber, setBpjsNumber] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [selectedPDAM, setSelectedPDAM] = useState(null);
    const [customerId, setCustomerId] = useState('');
    const [selectedTVProvider, setSelectedTVProvider] = useState(null);
    const [selectedTVPackage, setSelectedTVPackage] = useState(null);
    const [tvCustomerId, setTVCustomerId] = useState('');

    const operators = [
        { name: 'Telkomsel', prefix: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'] },
        { name: 'Indosat', prefix: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'] },
        { name: 'XL', prefix: ['0817', '0818', '0819', '0859', '0877', '0878'] },
        { name: 'Axis', prefix: ['0831', '0832', '0833', '0838'] },
        { name: 'Three', prefix: ['0895', '0896', '0897', '0898', '0899'] },
        { name: 'Smartfren', prefix: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'] },
    ];

    const handlePhoneNumberChange = (e) => {
        const number = e.target.value;
        setPhoneNumber(number);

        const prefix = number.substring(0, 4);
        const operator = operators.find((op) => op.prefix.includes(prefix));
        setSelectedOperator(operator);
    };

    const pulsaOptions = [
        { nominal: 5000, harga: 5000, promo: true },
        { nominal: 10000, harga: 10000 },
        { nominal: 15000, harga: 15000 },
        { nominal: 20000, harga: 20500 },
        { nominal: 25000, harga: 25000 },
        { nominal: 30000, harga: 30000 },
        { nominal: 35000, harga: 36500 },
        { nominal: 40000, harga: 40000 },
        { nominal: 45000, harga: 45500 },
        { nominal: 50000, harga: 50000, promo: true },
    ];

    const ewalletOptions = [
        { id: 'gopay', name: 'GoPay', logo: Gopay },
        { id: 'ovo', name: 'OVO', logo: OVO },
        { id: 'dana', name: 'DANA', logo: Dana },
        { id: 'linkaja', name: 'LinkAja', logo: LinkAja },
        { id: 'shopeepay', name: 'ShopeePay', logo: ShopeePay },
    ];

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/beli-pulsa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: phoneNumber,
                    nominal: selectedNominal,
                }),
            });

            const result = await response.json();

            if (result.invoice_url) {
                window.location.href = result.invoice_url; // redirect ke halaman pembayaran Xendit
            } else {
                alert('Gagal membuat invoice: ' + (result.message || ''));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat menghubungi server.');
        }
    };

    const handleServiceClick = (service) => {
        if (service.label === 'Shuttle Bus') {
            window.open(
                `https://wa.me/6282288334648?text=Halo, saya ingin memesan Shuttle Bus%0A%0ADetail Pemesanan:%0A${service.inputFields.map((field) => `${field.replace(/_/g, ' ')}: [isi ${field}]`).join('%0A')}`,
                '_blank',
            );
            return;
        }
        setSelectedService(service);
        setShowPPOBModal(true);
    };

    const displayedHeroes = showAllHeroes ? heroes : heroes.slice(0, 6);
    const displayedLayanans = showAllLayanans ? layanans : layanans.slice(0, 9);

    const filteredHeroes = displayedHeroes.filter((hero) => {
        if (activeFilter === 'layanan') return !hero.is_checkin;
        if (activeFilter === 'checkin') return hero.is_checkin;
        return true;
    });

    return (
        <>
            <AdModal promos={promos} />
            <Head>
                <title>QRPay - Sistem Pembayaran & Pemesanan Tiket Digital di Indonesia</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="QRPay - Platform pembayaran & pemesanan tiket digital terpercaya di Indonesia. Pesan tiket pesawat, kereta, bus & bayar tagihan dengan mudah. Transaksi aman, cepat & terkonfirmasi instan."
                />
                <meta
                    name="keywords"
                    content="QRPay, pembayaran digital Indonesia, tiket online, pemesanan tiket, tiket pesawat, tiket kereta api, tiket bus, pembayaran QRIS, travel booking Indonesia, pembayaran tagihan online"
                />
                <meta name="author" content="QRPay Indonesia" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="QRPay - Sistem Pembayaran & Pemesanan Tiket Digital #1 di Indonesia" />
                <meta
                    property="og:description"
                    content="Platform pembayaran & pemesanan tiket digital terpercaya. Pesan tiket transportasi & bayar tagihan dengan mudah. Transaksi aman & cepat."
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:url" content="https://qrpay.co.id" />
                <meta property="og:site_name" content="QRPay Indonesia" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="QRPay - Sistem Pembayaran & Pemesanan Tiket Digital Terpercaya" />
                <meta
                    name="twitter:description"
                    content="Platform pembayaran & pemesanan tiket digital terpercaya. Transaksi aman & cepat dengan QRPay."
                />
                <meta name="twitter:image" content="/logo.png" />

                <meta name="language" content="id-ID" />
                <meta name="geo.region" content="ID" />
                <meta name="geo.placename" content="Indonesia" />
                <link rel="canonical" href="https://qrpay.co.id" />
                <meta name="theme-color" content="#EF018F" />
            </Head>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-[#8FD8FA] to-[#CCE0FD] py-25 font-['DM_Sans']"
            >
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:gap-8 md:grid-cols-2 md:gap-10">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="py-8 text-center md:py-0 md:text-left"
                    >
                        <motion.img
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            src={Wave}
                            alt="wave"
                            className="mx-auto mb-4 w-16 sm:w-18 md:mx-0 md:w-20"
                        />
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-4 text-2xl leading-tight font-bold text-black sm:mb-6 sm:text-3xl md:text-4xl"
                        >
                            Sistem Digital untuk Pejalanan
                            <br />
                            Tanpa Hambatan
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-6 text-sm text-gray-700 sm:text-base md:text-lg"
                        >
                            <span className="font-medium text-[#EF018F]">QR Pay</span> bantu kamu pesan tiket perjalanan dengan praktis.
                            <br className="hidden sm:block" />
                            Aman, cepat, dan langsung terkonfirmasi.
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer rounded-full bg-blue-600 px-4 py-2.5 text-sm text-white shadow-md transition duration-200 hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
                        >
                            Pesan Tiket Sekarang
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative h-[300px] w-full overflow-hidden sm:h-[400px] md:h-[450px] lg:h-[500px]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.img
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                src={Tugu}
                                alt="Tugu"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="relative z-10 h-[250px] w-auto object-contain sm:h-[300px] md:h-[350px] lg:h-[420px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            <section className="overflow-hidden bg-[#CCE0FD] py-2 sm:py-3 md:py-4">
                <div className="animate-marquee flex w-max items-center justify-center px-2 whitespace-nowrap sm:px-4">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Airline Logo"
                            className="mx-2 h-6 w-auto max-w-[50px] object-contain sm:mx-3 sm:h-8 sm:max-w-[65px] md:mx-4 md:h-10 md:max-w-[80px]"
                        />
                    ))}
                </div>
            </section>
            <section
                className="min-h-screen bg-gradient-to-b from-[#CCE0FD] via-[#7DB0E8] to-[#CCE0FD] px-4 py-20 font-['DM_Sans']"
                id="services-section"
            >
                <div className="mb-10 text-center">
                    <h1 className="text-2xl font-bold text-[#1B1B1F] md:text-3xl">Kami Hadirkan Layanan Terbaik Untuk Perjalananmu</h1>
                    <p className="mt-2 font-bold text-[#EF018F]">Lihat berbagai layanan tiket yang kami sediakan dan pilih yang paling pas untukmu</p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-4">
                        <div className="flex gap-4">
                            <button
                                onClick={() => setActiveFilter('layanan')}
                                className={`cursor-pointer rounded-full px-6 py-2 font-semibold transition-all duration-200 active:scale-95 ${
                                    activeFilter === 'layanan' ? 'bg-[#EF018F] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Layanan
                            </button>
                            <button
                                onClick={() => setActiveFilter('checkin')}
                                className={`cursor-pointer rounded-full px-6 py-2 font-semibold transition-all duration-200 active:scale-95 ${
                                    activeFilter === 'checkin' ? 'bg-[#EF018F] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Check-in
                            </button>
                        </div>

                        {activeFilter === 'checkin' && (
                            <div className="mt-8 flex flex-col gap-6 rounded-3xl px-4 py-8 backdrop-blur-sm sm:px-8 md:px-12 lg:px-16">
                                <div className="hidden lg:block">
                                    <div className="grid grid-cols-4 gap-16 px-4">
                                        {checkInLogos.slice(0, 4).map((item, index) => (
                                            <div key={index} className="flex items-center justify-center">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                    <div className="flex items-center justify-center rounded-2xl bg-white/30 p-4 transition-all duration-300 hover:scale-105 hover:bg-white/40">
                                                        <img src={item.logo} alt="Airline Logo" className="h-28 w-auto max-w-full object-contain" />
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 grid grid-cols-3 gap-16 px-16">
                                        {checkInLogos.slice(4, 7).map((item, index) => (
                                            <div key={index} className="flex items-center justify-center">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                    <div className="flex items-center justify-center rounded-2xl bg-white/30 p-4 transition-all duration-300 hover:scale-105 hover:bg-white/40">
                                                        <img src={item.logo} alt="Airline Logo" className="h-28 w-auto max-w-full object-contain" />
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden md:block lg:hidden">
                                    <div className="grid grid-cols-3 gap-8">
                                        {checkInLogos.map((item, index) => (
                                            <div key={index} className="flex items-center justify-center">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                    <div className="flex items-center justify-center rounded-xl bg-white/30 p-3 transition-all duration-300 hover:scale-105 hover:bg-white/40">
                                                        <img src={item.logo} alt="Airline Logo" className="h-24 w-auto max-w-full object-contain" />
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:hidden">
                                    <div className="grid grid-cols-2 gap-4">
                                        {checkInLogos.map((item, index) => (
                                            <div key={index} className="flex items-center justify-center">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                    <div className="flex items-center justify-center rounded-lg bg-white/30 p-2 transition-all duration-300 hover:scale-105 hover:bg-white/40">
                                                        <img src={item.logo} alt="Airline Logo" className="h-20 w-auto max-w-full object-contain" />
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {heroes.length > 0 ? (
                        <>
                            {filteredHeroes.map((hero, idx) => (
                                <div
                                    key={idx}
                                    className="flex h-full flex-col rounded-2xl bg-gray-50 p-8 shadow-md transition duration-300 hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-6">
                                        <img
                                            src={`/storage/${hero.gambar ?? 'default-hero.png'}`}
                                            alt={hero.name}
                                            className="h-16 w-16 self-center object-contain"
                                        />
                                        <div className="text-left">
                                            <h2 className="mb-2 text-lg font-semibold text-[#1B1B1F]">{hero.name}</h2>
                                            <p
                                                className="text-sm leading-relaxed text-[#4B4B4B]"
                                                dangerouslySetInnerHTML={{ __html: hero.description ?? '-' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-6">
                                        {hero.link ? (
                                            <a href={hero.link} target="_blank" rel="noopener noreferrer">
                                                <button className="w-full cursor-pointer rounded-full bg-[#EF018F] px-6 py-3 font-semibold text-white transition duration-200 hover:bg-[#B01368]">
                                                    Pesan Sekarang
                                                </button>
                                            </a>
                                        ) : (
                                            <button
                                                disabled
                                                className="w-full cursor-not-allowed rounded-full bg-gray-300 px-6 py-3 font-semibold text-white"
                                            >
                                                Link Tidak Tersedia
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className="col-span-full text-center text-gray-700">Belum ada layanan tersedia.</p>
                    )}
                </div>
                {heroes.length > 6 && !showAllHeroes && filteredHeroes.length > 6 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowAllHeroes(true)}
                            className="cursor-pointer rounded-full bg-blue-600 px-4 py-1 text-sm text-white shadow-md transition duration-200 hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
                        >
                            Lihat Selengkapnya
                        </button>
                    </div>
                )}
            </section>
            <section className="relative h-[300px] overflow-hidden sm:h-[400px] md:h-[500px]">
                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection="left"
                    autoplay={true}
                    autoplaySpeed={2.0}
                    autoplayDirection="down"
                    className="h-full w-full"
                />
            </section>
            <section className="font-['DM Sans'] bg-gradient-to-b from-[#CCE0FD] via-[#99B3DE] to-[#7DA8E8] px-4 py-12 pt-30 sm:py-16 md:py-20 lg:py-2 lg:pt-25">
                <div className="mb-6 text-center sm:mb-8">
                    <h2 className="text-xl font-bold text-[#1B1B1F] sm:text-2xl md:text-3xl">Rekomendasi Tempat Wisata</h2>
                    <p className="mt-2 text-sm font-bold text-[#EF018F] sm:text-base">
                        Butuh ide liburan? Cek tempat wisata terbaik yang kami pilih khusus untukmu!
                    </p>
                </div>

                <div className="relative mx-auto max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-6xl">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        effect="coverflow"
                        centeredSlides={true}
                        slidesPerView="auto"
                        initialSlide={2}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        coverflowEffect={{
                            rotate: 5,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            type: 'bullets',
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="mySwiper !pb-12 sm:!pb-14 md:!pb-16"
                    >
                        {liburans.length > 0 ? (
                            liburans.map((item, index) => (
                                <SwiperSlide key={index} className="!w-[240px] sm:!w-[400px] md:!w-[500px]">
                                    <img
                                        src={`/storage/${item.gambar ?? 'default-liburan.jpg'}`}
                                        alt={`Liburan ${index + 1}`}
                                        className="h-[160px] w-full cursor-pointer rounded-2xl object-cover sm:h-[250px] sm:rounded-3xl md:h-[300px]"
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="w-full py-10 text-center text-gray-700">Belum ada data liburan tersedia.</div>
                        )}
                        <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8 sm:gap-6 md:gap-8">
                            <div className="swiper-button-prev !static !h-6 !w-6 !text-gray-800 after:!text-base sm:!h-7 sm:!w-7 sm:after:!text-lg md:!h-8 md:!w-8"></div>
                            <div className="swiper-pagination !static"></div>
                            <div className="swiper-button-next !static !h-6 !w-6 !text-gray-800 after:!text-base sm:!h-7 sm:!w-7 sm:after:!text-lg md:!h-8 md:!w-8"></div>
                        </div>
                    </Swiper>
                </div>
            </section>
            <section className="font-['DM Sans'] bg-[#7DA8E8] bg-gradient-to-b from-[#7DA8E8] to-[#CCE0FD] px-4 py-8 sm:py-10 md:py-12">
                <div className="mb-6 text-center sm:mb-8 md:mb-10">
                    <h2 className="text-xl font-bold text-[#1B1B1F] sm:text-2xl md:text-3xl">Promo Menarik</h2>
                    <p className="mt-2 text-sm font-bold text-[#EF018F] sm:text-base">
                        Nikmati berbagai promo dan layanan spesial dari kami
                        <br className="hidden sm:block" />
                        dengan harga yang lebih hemat.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:gap-4 sm:px-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
                    {displayedLayanans.length > 0 ? (
                        displayedLayanans.map((item, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg sm:rounded-xl"
                            >
                                <a href={item.link} rel="noopener noreferrer" target="_blank">
                                    <img
                                        src={`/storage/${item.gambar ?? 'default-layanan.jpg'}`}
                                        alt={item.judul}
                                        className="h-[280px] w-full object-fill sm:h-[280px] md:h-[270px] lg:h-[250px]"
                                    />
                                    <div className="p-2 sm:p-3">
                                        <h3 className="font-['DM Sans'] text-center text-[10px] font-bold text-black sm:text-xs md:text-sm">
                                            {item.judul}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-700">Belum ada layanan tersedia.</p>
                    )}
                </div>
                {layanans.length > 9 && !showAllLayanans && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowAllLayanans(true)}
                            className="cursor-pointer rounded-full bg-blue-600 px-4 py-1 text-sm text-white shadow-md transition duration-200 hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
                        >
                            Lihat Selengkapnya
                        </button>
                    </div>
                )}
            </section>
            <section
                className="min-h-screen bg-gradient-to-b from-[#CCE0FD] via-[#7DB0E8] to-[#FFFFFF] px-4 py-20 font-['DM_Sans']"
                id="services-section"
            >
                <div className="mb-10 text-center">
                    <h1 className="text-2xl font-bold text-[#1B1B1F] md:text-3xl">Kami Hadirkan Layanan Terbaik Untuk Perjalananmu</h1>
                    <p className="mt-2 font-bold text-[#EF018F]">Lihat berbagai layanan yang kami sediakan dan pilih yang paling pas untukmu</p>
                </div>

                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-9 sm:gap-4">
                        {layananItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <button onClick={() => handleServiceClick(item)} className="group flex flex-col items-center justify-center p-3">
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="h-16 w-16 cursor-pointer object-contain transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>

                    {selectedService?.type === 'pulsa' && (
                        <div className="mt-8 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Beli Pulsa</h2>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                                >
                                    {/* <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg> */}
                                </button>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        placeholder="Contoh: 08123456789"
                                        className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-gray-700 focus:border-[#EF018F] focus:ring-1 focus:ring-[#EF018F] focus:outline-none"
                                        maxLength="13"
                                    />
                                    {phoneNumber && (
                                        <button
                                            onClick={() => setPhoneNumber('')}
                                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                {selectedOperator && <p className="mt-2 text-sm font-medium text-[#EF018F]">Operator: {selectedOperator.name}</p>}
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Nominal</label>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                    {pulsaOptions.map((pulsa, index) => (
                                        <button
                                            key={index}
                                            className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all duration-200 ${
                                                selectedNominal === pulsa.nominal
                                                    ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                    : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                            }`}
                                            onClick={() => setSelectedNominal(pulsa.nominal)}
                                        >
                                            <span className="text-sm font-semibold">Rp{pulsa.nominal.toLocaleString()}</span>
                                            <span className="mt-1 text-xs text-gray-500">Rp{pulsa.harga.toLocaleString()}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={!phoneNumber || !selectedNominal}
                                className="mt-6 w-full cursor-pointer rounded-lg bg-[#EF018F] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#D6017F] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Beli Pulsa
                            </button>
                        </div>
                    )}
                    {selectedService?.type === 'pln' && (
                        <div className="mt-8 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Layanan PLN</h2>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                                >
                                    {/* <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg> */}
                                </button>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Jenis Layanan PLN</label>
                                <div className="grid cursor-pointer grid-cols-1 gap-3 sm:grid-cols-3">
                                    {['Token Listrik', 'Tagihan Listrik', 'PLN Non-Taglis'].map((jenis, index) => (
                                        <button
                                            key={index}
                                            className={`relative flex cursor-pointer items-center justify-center rounded-lg border p-4 transition-all duration-200 ${
                                                selectedJenisPLN === jenis
                                                    ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                    : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                            }`}
                                            onClick={() => setSelectedJenisPLN(jenis)}
                                        >
                                            <span className="text-sm font-semibold">{jenis}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Nomor Meter/ID Pelanggan</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={meterNumber}
                                        onChange={(e) => setMeterNumber(e.target.value)}
                                        placeholder="Contoh: 12345678901"
                                        className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-gray-700 focus:border-[#EF018F] focus:ring-1 focus:ring-[#EF018F] focus:outline-none"
                                        maxLength="12"
                                    />
                                    {meterNumber && (
                                        <button
                                            onClick={() => setMeterNumber('')}
                                            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                                        >
                                            {/* <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg> */}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {selectedJenisPLN === 'Token Listrik' && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Nominal Token</label>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                        {[20000, 50000, 100000, 200000, 500000, 1000000].map((nominal, index) => (
                                            <button
                                                key={index}
                                                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all duration-200 ${
                                                    selectedNominal === nominal
                                                        ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                        : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                                }`}
                                                onClick={() => setSelectedNominal(nominal)}
                                            >
                                                <span className="text-sm font-semibold">Rp{nominal.toLocaleString()}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={!meterNumber || (selectedJenisPLN === 'Token Listrik' && !selectedNominal)}
                                className="mt-6 w-full cursor-pointer rounded-lg bg-[#EF018F] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#D6017F] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {selectedJenisPLN === 'Token Listrik' ? 'Beli Token' : 'Cek Tagihan'}
                            </button>
                        </div>
                    )}
                    {selectedService?.type === 'ewallet' && (
                        <div className="mt-8 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Top Up E-Wallet</h2>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                                >
                                    {/* <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg> */}
                                </button>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Pilih E-Wallet</label>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                    {ewalletOptions.map((wallet, index) => (
                                        <button
                                            key={index}
                                            className={`flex cursor-pointer flex-col items-center rounded-lg border p-2 transition-all duration-200 ${
                                                selectedWallet === wallet.id
                                                    ? 'border border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                    : 'border border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                            }`}
                                            onClick={() => setSelectedWallet(wallet.id)}
                                        >
                                            <img src={wallet.logo} alt={wallet.name} className="mb-2 h-20 w-20 object-contain" />
                                            {/* <span className="text-sm font-medium">{wallet.name}</span> */}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedWallet && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Contoh: 08123456789"
                                            className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-gray-700 focus:border-[#EF018F] focus:ring-1 focus:ring-[#EF018F] focus:outline-none"
                                            maxLength="13"
                                        />
                                        {phoneNumber && (
                                            <button
                                                onClick={() => setPhoneNumber('')}
                                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {selectedWallet && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Nominal Top Up</label>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                        {[10000, 20000, 50000, 100000, 150000, 200000, 300000, 500000].map((nominal, index) => (
                                            <button
                                                key={index}
                                                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all duration-200 ${
                                                    selectedNominal === nominal
                                                        ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                        : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                                }`}
                                                onClick={() => setSelectedNominal(nominal)}
                                            >
                                                <span className="text-sm font-semibold">Rp{nominal.toLocaleString()}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={!selectedWallet || !phoneNumber || !selectedNominal}
                                className="mt-6 w-full cursor-pointer rounded-lg bg-[#EF018F] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#D6017F] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Top Up Sekarang
                            </button>
                        </div>
                    )}
                    {selectedService?.type === 'games' && (
                        <div className="mt-8 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Voucher Games</h2>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                                ></button>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Pilih Game</label>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        { id: 'mlbb', name: 'Mobile Legends', currency: 'Diamond', image: MLBB, popular: true },
                                        { id: 'pubg', name: 'PUBG Mobile', currency: 'UC', image: PUBG, popular: true },
                                        { id: 'ff', name: 'Free Fire', currency: 'Diamond', image: FF, popular: true },
                                        { id: 'ffmax', name: 'FF MAX', currency: 'Diamond', image: FFMax, popular: true },
                                    ].map((game) => (
                                        <button
                                            key={game.id}
                                            className={`relative flex cursor-pointer flex-col items-center rounded-lg border p-3 transition-all duration-200 ${
                                                selectedGame === game.id
                                                    ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                    : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                            }`}
                                            onClick={() => setSelectedGame(game.id)}
                                        >
                                            <img src={game.image} alt={game.name} className="mb-2 h-20 w-20 object-contain" />
                                            {/* <span className="text-sm font-semibold">{game.name}</span> */}
                                            {game.popular && (
                                                <span className="mt-1 rounded-full bg-[#EF018F]/10 px-2 py-0.5 text-xs text-[#EF018F]">Populer</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedGame && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">User ID</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                            placeholder="Masukkan User ID"
                                            className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-gray-700 focus:border-[#EF018F] focus:ring-1 focus:ring-[#EF018F] focus:outline-none"
                                        />
                                        {userId && (
                                            <button
                                                onClick={() => setUserId('')}
                                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">
                                        {selectedGame === 'mlbb' && 'Contoh: 12345678 (1234)'}
                                        {selectedGame === 'pubg' && 'Contoh: 515151515'}
                                        {(selectedGame === 'ff' || selectedGame === 'ffmax') && 'Contoh: 12345678'}
                                    </p>
                                </div>
                            )}

                            {selectedGame && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Nominal {selectedGame === 'pubg' ? 'UC' : 'Diamond'}
                                    </label>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                        {(selectedGame === 'pubg'
                                            ? [
                                                  { nominal: 60, harga: 15000, promo: true },
                                                  { nominal: 120, harga: 29000 },
                                                  { nominal: 240, harga: 57000 },
                                                  { nominal: 600, harga: 140000 },
                                                  { nominal: 1200, harga: 275000 },
                                                  { nominal: 1800, harga: 410000, populer: true },
                                              ]
                                            : [
                                                  { nominal: 50, harga: 12000, promo: true },
                                                  { nominal: 100, harga: 24000 },
                                                  { nominal: 200, harga: 45000 },
                                                  { nominal: 500, harga: 110000 },
                                                  { nominal: 1000, harga: 220000 },
                                                  { nominal: 2000, harga: 435000, populer: true },
                                              ]
                                        ).map((item, index) => (
                                            <button
                                                key={index}
                                                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all duration-200 ${
                                                    selectedNominal === item.nominal
                                                        ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                        : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                                }`}
                                                onClick={() => setSelectedNominal(item.nominal)}
                                            >
                                                <span className="text-sm font-semibold">
                                                    {item.nominal} {selectedGame === 'pubg' ? '🎮' : '💎'}
                                                </span>
                                                <span className="mt-1 text-xs text-gray-500">Rp{item.harga.toLocaleString()}</span>
                                                {item.promo && (
                                                    <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                                                        Promo!
                                                    </span>
                                                )}
                                                {item.populer && (
                                                    <span className="absolute -top-2 -right-2 rounded-full bg-[#EF018F] px-2 py-0.5 text-xs text-white">
                                                        Populer!
                                                    </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={!selectedGame || !userId || !selectedNominal}
                                className="mt-6 w-full cursor-pointer rounded-lg bg-[#EF018F] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#D6017F] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Beli {selectedGame === 'pubg' ? 'UC' : 'Diamond'}
                            </button>
                        </div>
                    )}
                    {selectedService?.type === 'bpjs' && (
                        <div className="mt-8 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Pembayaran BPJS</h2>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                                ></button>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Jenis BPJS</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { id: 'kesehatan', name: 'BPJS Kesehatan', image: Kesehatan },
                                        { id: 'ketenagakerjaan', name: 'BPJS Ketenagakerjaan', image: Ketenagakerjaan },
                                    ].map((type) => (
                                        <button
                                            key={type.id}
                                            className={`relative flex cursor-pointer flex-col items-center rounded-lg border p-4 transition-all duration-200 ${
                                                selectedBPJSType === type.id
                                                    ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                    : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                            }`}
                                            onClick={() => setSelectedBPJSType(type.id)}
                                        >
                                            <img src={type.image} alt={type.name} className="mb-3 h-20 w-auto object-contain" />
                                            <span className="text-sm font-semibold">{type.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedBPJSType && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Nomor BPJS</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={bpjsNumber}
                                            onChange={(e) => setBpjsNumber(e.target.value)}
                                            placeholder={`Masukkan Nomor BPJS ${selectedBPJSType === 'kesehatan' ? 'Kesehatan' : 'Ketenagakerjaan'}`}
                                            className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-gray-700 focus:border-[#EF018F] focus:ring-1 focus:ring-[#EF018F] focus:outline-none"
                                        />
                                        {bpjsNumber && (
                                            <button
                                                onClick={() => setBpjsNumber('')}
                                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">Contoh: 0001234567890</p>
                                </div>
                            )}

                            {selectedBPJSType && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Periode Pembayaran</label>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                        {[1, 2, 3, 6, 12].map((bulan) => (
                                            <button
                                                key={bulan}
                                                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all duration-200 ${
                                                    selectedPeriod === bulan
                                                        ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                        : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                                }`}
                                                onClick={() => setSelectedPeriod(bulan)}
                                            >
                                                <span className="text-sm font-semibold">{bulan} Bulan</span>
                                                <span className="mt-1 text-xs">
                                                    {selectedBPJSType === 'kesehatan'
                                                        ? `Rp${(bulan * 42000).toLocaleString()}`
                                                        : `Rp${(bulan * 46000).toLocaleString()}`}
                                                </span>
                                                {bulan === 12 && (
                                                    <span className="absolute -top-2 -right-2 rounded-full bg-[#EF018F] px-2 py-0.5 text-xs text-white">
                                                        Hemat!
                                                    </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={!selectedBPJSType || !bpjsNumber || !selectedPeriod}
                                className="mt-6 w-full cursor-pointer rounded-lg bg-[#EF018F] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#D6017F] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Bayar BPJS
                            </button>
                        </div>
                    )}
                    {selectedService?.type === 'pdam' && (
                        <div className="mt-8 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Pembayaran PDAM</h2>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                                ></button>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">Pilih Wilayah PDAM</label>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    {[
                                        { id: 'tanjungpinang', name: 'PDAM Tirta Kepri Tanjungpinang', biayaAdmin: 2500 },
                                        { id: 'batam', name: 'PDAM Batam', biayaAdmin: 2500 },
                                        { id: 'lingga', name: 'PDAM Perumda Tirta Lingga', biayaAdmin: 2500 },
                                    ].map((pdam) => (
                                        <button
                                            key={pdam.id}
                                            className={`relative flex cursor-pointer flex-col items-center rounded-lg border p-4 transition-all duration-200 ${
                                                selectedPDAM === pdam.id
                                                    ? 'border-[#EF018F] bg-pink-50 text-[#EF018F]'
                                                    : 'border-gray-200 hover:border-[#EF018F] hover:bg-pink-50'
                                            }`}
                                            onClick={() => setSelectedPDAM(pdam.id)}
                                        >
                                            <img src={PDAMKepri} alt={pdam.name} className="mb-3 h-30 w-30 object-contain" />
                                            <span className="text-center text-sm font-semibold">{pdam.name}</span>
                                            <span className="mt-2 text-xs text-gray-500">Biaya Admin: Rp{pdam.biayaAdmin.toLocaleString()}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedPDAM && (
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">ID Pelanggan</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={customerId}
                                            onChange={(e) => setCustomerId(e.target.value)}
                                            placeholder="Masukkan ID Pelanggan PDAM"
                                            className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-gray-700 focus:border-[#EF018F] focus:ring-1 focus:ring-[#EF018F] focus:outline-none"
                                        />
                                        {customerId && (
                                            <button
                                                onClick={() => setCustomerId('')}
                                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">Contoh: 123456789</p>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={!selectedPDAM || !customerId}
                                className="mt-6 w-full cursor-pointer rounded-lg bg-[#EF018F] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#D6017F] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Cek Tagihan
                            </button>

                            <div className="mt-6 rounded-lg bg-blue-50 p-4">
                                <h3 className="text-sm font-semibold text-blue-800">Informasi Penting:</h3>
                                <ul className="mt-2 list-inside list-disc text-xs text-blue-700">
                                    <li>Pastikan ID Pelanggan yang dimasukkan sudah benar</li>
                                    <li>Biaya admin akan ditambahkan pada total tagihan</li>
                                    <li>Pembayaran yang sudah diproses tidak dapat dibatalkan</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {selectedService?.type === 'tv' && (
                        <div className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Pilih Provider TV Kabel</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setSelectedTVProvider('k-vision')}
                                        className={`flex items-center justify-center rounded-lg p-4 ${
                                            selectedTVProvider === 'k-vision'
                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                : 'border border-gray-200 bg-white'
                                        }`}
                                    >
                                        <span className="text-sm font-medium">K-Vision</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedTVProvider('tanaka-hd')}
                                        className={`flex items-center justify-center rounded-lg p-4 ${
                                            selectedTVProvider === 'tanaka-hd'
                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                : 'border border-gray-200 bg-white'
                                        }`}
                                    >
                                        <span className="text-sm font-medium">Tanaka HD</span>
                                    </button>
                                </div>
                            </div>

                            {selectedTVProvider && (
                                <>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">Nomor Pelanggan</label>
                                        <input
                                            type="text"
                                            value={tvCustomerId}
                                            onChange={(e) => setTVCustomerId(e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 p-2"
                                            placeholder="Masukkan nomor pelanggan"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">Pilih Paket</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedTVProvider === 'k-vision' ? (
                                                <>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('bronze')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'bronze'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Bronze</span>
                                                        <span className="text-xs text-gray-500">Rp 99.000</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('silver')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'silver'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Silver</span>
                                                        <span className="text-xs text-gray-500">Rp 149.000</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('gold')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'gold'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Gold</span>
                                                        <span className="text-xs text-gray-500">Rp 199.000</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('platinum')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'platinum'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Platinum</span>
                                                        <span className="text-xs text-gray-500">Rp 299.000</span>
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('basic')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'basic'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Basic</span>
                                                        <span className="text-xs text-gray-500">Rp 89.000</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('family')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'family'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Family</span>
                                                        <span className="text-xs text-gray-500">Rp 129.000</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('premium')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'premium'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Premium</span>
                                                        <span className="text-xs text-gray-500">Rp 179.000</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedTVPackage('ultimate')}
                                                        className={`flex flex-col items-center justify-center rounded-lg p-4 ${
                                                            selectedTVPackage === 'ultimate'
                                                                ? 'border-2 border-[#EF018F] bg-pink-100'
                                                                : 'border border-gray-200 bg-white'
                                                        }`}
                                                    >
                                                        <span className="text-sm font-medium">Ultimate</span>
                                                        <span className="text-xs text-gray-500">Rp 249.000</span>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick=""
                                        disabled={!tvCustomerId || !selectedTVPackage}
                                        className="w-full rounded-lg bg-[#EF018F] px-4 py-2 text-white disabled:opacity-50"
                                    >
                                        Bayar Sekarang
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Home;
