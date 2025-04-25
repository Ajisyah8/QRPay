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
// import Bus from './layanan/Bus.png';
import DompetDigital from './layanan/DompetDigital.png';
// import Hotel from './layanan/Hotel.png';
// import Kapal from './layanan/Kapal laut.png';
// import Kereta from './layanan/Kereta api.png';
import PLN from './layanan/ListrikPLN.png';
import PBB from './layanan/PBB.png';
import PDAM from './layanan/PDAM.png';
// import Pesawat from './layanan/Pesawat.png';
import Pulsa from './layanan/Pulsa.png';
import ShuttleBus from './layanan/ShuttleBus.png';
// import Ticket from './layanan/Ticket.png';
import TVKabel from './layanan/TV.png';
import VoucherGames from './layanan/Voucher.png';
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
import Trigana from './partner/Trigana Air.png';
import Wings from './partner/wingsair.png';
// import Promo1 from './promo/Promo1.jpeg';
// import Promo2 from './promo/Promo2.jpeg';
// import Promo3 from './promo/Promo3.jpeg';
// import Promo4 from './promo/Promo4.jpeg';
// import Promo5 from './promo/Promo5.jpeg';
// import Promo6 from './promo/Promo6.jpeg';
// import Promo7 from './promo/Promo7.jpeg';
// import Promo8 from './promo/Promo8.jpeg';
// import Bali from './wisata/bali.jpg';
// import Candi from './wisata/candi.jpg';
// import Komodo from './wisata/komodo.jpg';
// import RajaAmpat from './wisata/rajaAmpat.jpg';
// import Wakatobi from './wisata/wakatobi.jpg';
import AirAsia from './partner/airasia.png';
import Transnusa from './partner/transnusa.png';
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
    { image: ShuttleBus, label: 'Shuttle Bus' },
    { image: Pulsa, label: 'Pulsa' },
    { image: PLN, label: 'Listrik PLN' },
    { image: DompetDigital, label: 'Dompet Digital' },
    { image: VoucherGames, label: 'Voucher Games' },
    { image: BPJS, label: 'BPJS' },
    { image: PDAM, label: 'PDAM' },
    { image: TVKabel, label: 'TV Kabel' },
    { image: PBB, label: 'PBB' },
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
                <title>QRPay - Sistem Digital untuk Perjalanan Tanpa Hambatan</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="QRPay membantu Anda memesan tiket perjalanan dengan praktis. Nikmati layanan pemesanan tiket yang aman, cepat, dan langsung terkonfirmasi untuk berbagai moda transportasi."
                />
                <meta
                    name="keywords"
                    content="QRPay, tiket online, pemesanan tiket, tiket pesawat, tiket kereta, tiket bus, pembayaran digital, travel booking"
                />
                <meta name="author" content="QRPay" />
                <meta name="robots" content="index, follow" />
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
                className="font-['DM Sans'] px-4 py-8 sm:py-12 md:py-16"
                style={{
                    background: 'linear-gradient(to bottom, #CCE0FD, #FFFFFF)',
                }}
            >
                <div className="mb-6 text-center sm:mb-8 md:mb-10">
                    <h2 className="text-xl font-bold text-[#1B1B1F] sm:text-2xl md:text-3xl">Butuh Layanan Lainnya?</h2>
                    <p className="mt-2 text-sm font-bold text-[#EF2DA2] sm:text-base">Klik ikon di bawah untuk pesan langsung lewat WhatsApp!</p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="sm:hidden">
                        <div className="grid grid-cols-2 gap-8">
                            {layananItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`https://wa.me/6282288334682?text=Halo%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.label)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="h-24 w-24 object-contain transition-transform duration-200 hover:scale-110"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <div className="grid grid-cols-5 justify-items-center gap-4">
                            {layananItems.slice(0, 5).map((item, index) => (
                                <a
                                    key={index}
                                    href={`https://wa.me/6282288334682?text=Halo%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.label)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="h-28 w-28 object-contain transition-transform duration-200 hover:scale-110 md:h-32 md:w-32 lg:h-40 lg:w-40"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center gap-12">
                            {layananItems.slice(5).map((item, index) => (
                                <a
                                    key={index}
                                    href={`https://wa.me/6282288334682?text=Halo%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.label)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="h-28 w-28 object-contain transition-transform duration-200 hover:scale-110 md:h-32 md:w-32 lg:h-40 lg:w-40"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
