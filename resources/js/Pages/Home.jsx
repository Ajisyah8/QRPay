import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import InfiniteScroll from '../components/Quote';
import Jembatan from './assets/jembatan.png';
import Lagoi from './assets/lagoi.png';
import Pantai from './assets/pantai.png';
import Tugu from './assets/tugu siri.png';
import Wave from './assets/Vector 1.png';
import BPJS from './layanan/BPJS.png';
import Bus from './layanan/Bus.png';
import DompetDigital from './layanan/DompetDigital.png';
import Hotel from './layanan/Hotel.png';
import Kapal from './layanan/Kapal laut.png';
import Kereta from './layanan/Kereta api.png';
import PLN from './layanan/ListrikPLN.png';
import PBB from './layanan/PBB.png';
import PDAM from './layanan/PDAM.png';
import Pesawat from './layanan/Pesawat.png';
import Pulsa from './layanan/Pulsa.png';
import ShuttleBus from './layanan/ShuttleBus.png';
import Ticket from './layanan/Ticket.png';
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
import Promo1 from './promo/Promo1.jpeg';
import Promo2 from './promo/Promo2.jpeg';
import Promo3 from './promo/Promo3.jpeg';
import Promo4 from './promo/Promo4.jpeg';
import Promo5 from './promo/Promo5.jpeg';
import Promo6 from './promo/Promo6.jpeg';
import Promo7 from './promo/Promo7.jpeg';
import Promo8 from './promo/Promo8.jpeg';
import Bali from './wisata/bali.jpg';
import Candi from './wisata/candi.jpg';
import Komodo from './wisata/komodo.jpg';
import RajaAmpat from './wisata/rajaAmpat.jpg';
import Wakatobi from './wisata/wakatobi.jpg';
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

const services = [
    {
        title: 'Pesawat',
        desc: 'Tiket pesawat domestik & internasional? Pesan gampang di QR Pay!',
        img: Pesawat,
    },
    {
        title: 'Kereta Api',
        desc: 'Siap bepergian naik kereta? Yuk, pesan tiketnya sekarang biar gak kehabisan!',
        img: Kereta,
    },
    {
        title: 'Kapal Laut',
        desc: 'Mau menyeberang antar pulau? Tiket kapal laut bisa kamu pesan langsung dari sini!',
        img: Kapal,
    },
    {
        title: 'Bus & Travel',
        desc: 'Butuh tiket bus ke luar kota? Cari rute bus & travel favoritmu dan pesan langsung di sini!',
        img: Bus,
    },
    {
        title: 'Hotel',
        desc: 'Staycation atau liburan jauh? Pesan hotel jadi makin gampang di QR Pay!',
        img: Hotel,
    },
    {
        title: 'Tiket Wisata',
        desc: 'Mau liburan seru? Pesan tiket tempat wisata favoritmu di QR Pay!',
        img: Ticket,
    },
];

const wisataImages = [Bali, Candi, Komodo, RajaAmpat, Wakatobi];

const promoItems = [
    {
        title: 'Promo Harga Papan',
        image: Promo1,
    },
    {
        title: 'Sewa Mesin Fotocopy',
        image: Promo2,
    },
    {
        title: 'Jasa Cetak Spanduk',
        image: Promo3,
    },
    {
        title: 'Media Promosi',
        image: Promo4,
    },
    {
        title: 'Jasa Rental Kendaraan',
        image: Promo5,
    },
    {
        title: 'Beli Tiket Pesawat, Kapal, Kereta',
        image: Promo6,
    },
    {
        title: 'Diskon & Murah',
        image: Promo7,
    },
    {
        title: 'Jasa Percetakan',
        image: Promo8,
    },
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

const Home = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-[#8FD8FA] to-[#CCE0FD] py-16 font-['DM_Sans']"
            >
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <motion.img
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            src={Wave}
                            alt="wave"
                            className="mb-4 w-20"
                        />
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-6 text-3xl leading-tight font-bold text-black md:text-4xl"
                        >
                            Sistem Digital untuk Pejalanan
                            <br />
                            Tanpa Hambatan
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-md mb-6 text-gray-700"
                        >
                            <span className="font-medium text-[#EF018F]">QR Pay</span> bantu kamu pesan tiket perjalanan dengan praktis.
                            <br />
                            Aman, cepat, dan langsung terkonfirmasi.
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer rounded-full bg-blue-600 px-6 py-3 text-white shadow-md transition duration-200 hover:bg-blue-700"
                        >
                            Pesan Tiket Sekarang
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex h-[500px] w-full items-center justify-center"
                    >
                        <motion.img
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            src={Tugu}
                            alt="Monas"
                            className="ml-50 h-[420px]"
                        />

                        <motion.img
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            src={Jembatan}
                            className="absolute top-0 right-[250px] h-[150px] w-[150px] rounded-full"
                        />
                        <motion.img
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            src={Pantai}
                            className="absolute bottom-[230px] left-[180px] h-[80px] w-[80px] rounded-full"
                        />
                        <motion.img
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            src={Lagoi}
                            className="absolute top-[80px] right-[-40px] h-[90px] w-[90px] rounded-full"
                        />
                    </motion.div>
                </div>
            </motion.section>
            <section className="overflow-hidden bg-[#CCE0FD] py-8">
                <div className="animate-marquee flex w-max items-center whitespace-nowrap">
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt="Airline Logo" className="mx-6 h-12 w-auto max-w-[100px] object-contain" />
                    ))}
                </div>
            </section>
            <section className="min-h-screen bg-[#CCE0FD] px-4 py-20 font-['DM_Sans']" id="services-section">
                <div className="mb-10 text-center">
                    <h1 className="text-2xl font-bold text-[#1B1B1F] md:text-3xl">Kami Hadirkan Layanan Terbaik Untuk Perjalananmu</h1>
                    <p className="mt-2 font-bold text-[#EF2DA2]">Lihat berbagai layanan tiket yang kami sediakan dan pilih yang paling pas untukmu</p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:shadow-lg">
                            <div className="flex items-start gap-6">
                                <img src={service.img} alt={service.title} className="h-16 w-16 self-center object-contain" />
                                <div className="text-left">
                                    <h2 className="mb-2 text-lg font-semibold text-[#1B1B1F]">{service.title}</h2>
                                    <p className="text-sm leading-relaxed text-[#4B4B4B]">{service.desc}</p>
                                </div>
                            </div>
                            <div className="mt-auto pt-6">
                                <a href="https://velotiket.com/velosiqrpay" target="_blank">
                                    <button className="w-full cursor-pointer rounded-full bg-[#EF2DA2B2] px-6 py-3 font-semibold text-white transition duration-200 hover:bg-[#EF2DA2]">
                                        Pesan Sekarang
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section style={{ height: '500px', position: 'relative' }}>
                <InfiniteScroll items={items} isTilted={true} tiltDirection="left" autoplay={true} autoplaySpeed={2.0} autoplayDirection="down" />
            </section>
            <section className="font-['DM Sans'] bg-[#CCE0FD] px-4 py-25">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-[#1B1B1F]">Rekomendasi Tempat Wisata</h2>
                    <p className="mt-2 font-bold text-[#EF2DA2]">Butuh ide liburan? Cek tempat wisata terbaik yang kami pilih khusus untukmu!</p>
                </div>

                <div className="relative mx-auto max-w-6xl">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        effect="coverflow"
                        grabCursor={true}
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
                        className="mySwiper !pb-16"
                    >
                        {wisataImages.map((src, index) => (
                            <SwiperSlide key={index} className="!w-[500px]">
                                <img src={src} alt={`Wisata ${index + 1}`} className="h-[300px] w-full rounded-3xl object-cover" />
                            </SwiperSlide>
                        ))}
                        <div className="mt-8 flex items-center justify-center gap-8">
                            <div className="swiper-button-prev !static !h-8 !w-8 !text-gray-800 after:!text-lg"></div>
                            <div className="swiper-pagination !static"></div>
                            <div className="swiper-button-next !static !h-8 !w-8 !text-gray-800 after:!text-lg"></div>
                        </div>
                    </Swiper>
                </div>
            </section>
            <section className="font-['DM Sans'] bg-[#CCE0FD] px-4 py-5">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-[#1B1B1F]">Promo Menarik</h2>
                    <p className="mt-2 font-bold text-[#EF2DA2]">
                        Nikmati berbagai promo dan layanan spesial dari kami <br />
                        dengan harga yang lebih hemat.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {promoItems.map((item, index) => (
                        <div key={index} className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:scale-105">
                            <img src={item.image} alt={item.title} className="h-50 w-full object-fill" />
                            <div className="p-2">
                                <h3 className="font-['DM Sans'] text-center text-xs leading-tight font-bold text-black">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section
                className="font-['DM Sans'] px-4 py-16"
                style={{
                    background: 'linear-gradient(to bottom, #CCE0FD, #FFFFFF)',
                }}
            >
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold text-[#1B1B1F]">Butuh Layanan Lainnya?</h2>
                    <p className="mt-2 font-bold text-[#EF2DA2]">Klik ikon di bawah untuk pesan langsung lewat WhatsApp!</p>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-5 justify-items-center gap-4">
                    {layananItems.slice(0, 5).map((item, index) => (
                        <a
                            key={index}
                            href={`https://wa.me/6281274141926?text=Halo%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.label)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="h-40 w-40 object-contain transition-transform duration-200 hover:scale-110"
                            />
                        </a>
                    ))}
                    <div className="col-span-5 mt-4 flex justify-center gap-12">
                        {layananItems.slice(5).map((item, index) => (
                            <a
                                key={index}
                                href={`https://wa.me/6281274141926?text=Halo%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.label)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="h-40 w-40 object-contain transition-transform duration-200 hover:scale-110"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
