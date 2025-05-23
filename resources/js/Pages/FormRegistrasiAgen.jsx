import React, { useEffect, useState } from "react";

const FormRegistrasiAgen = () => {
    const [provinces, setProvinces] = useState([]);
    const [form, setForm] = useState({
        jenis: 'Basic',
        username: '',
        email: '',
        nama: '',
        hpUtama: '',
        hpAlternatif: '',
        alamat: '',
        provinsi: '',
        namaUsaha: '',
        setuju: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch("/api/v1/provinces")
            .then((res) => res.json())
            .then((data) => setProvinces(data.data || []));
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = {
                jenis: form.jenis,
                username: form.username,
                email: form.email,
                nama: form.nama,
                hp_utama: form.hpUtama,
                hp_alternatif: form.hpAlternatif,
                alamat: form.alamat,
                provinsi: form.provinsi,
                nama_usaha: form.namaUsaha,
            };
            const response = await fetch('/api/v1/registrasi-agen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Gagal mengirim data. Silakan cek koneksi Anda.');
            }
        } catch (error) {
            alert('Gagal mengirim data. Silakan cek koneksi Anda.');
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#8FD8FA] via-[#EF018F]/10 to-white">
                <div className="rounded-2xl bg-white p-10 shadow-2xl flex flex-col items-center max-w-lg w-full animate-fade-in">
                    <svg className="animate-spin h-12 w-12 text-[#EF018F] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <p className="text-lg font-semibold text-[#EF018F] text-center">Mengirim data, mohon tunggu...</p>
                </div>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#8FD8FA] via-[#EF018F]/10 to-white">
                <div className="rounded-2xl bg-white p-10 shadow-2xl flex flex-col items-center max-w-lg w-full animate-fade-in">
                    <div className="mb-6 flex items-center justify-center">
                        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#EF018F] to-[#8FD8FA] shadow-lg">
                            <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                    </div>
                    <h2 className="mb-2 text-3xl font-extrabold text-[#EF018F] text-center drop-shadow">Terima kasih telah mendaftar sebagai Agen QRPay.</h2>
                    <p className="text-lg text-gray-700 text-center mb-2">Tim kami akan segera menghubungi Anda melalui WhatsApp/email.</p>
                    <p className="text-sm text-gray-400 text-center">Pastikan nomor dan email Anda aktif untuk proses verifikasi lebih lanjut.</p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen py-8 mt-10 lg:mt-20" style={{ background: 'linear-gradient(180deg, #8FD8FA 40%, #fff 100%)', fontFamily: 'DM Sans, sans-serif' }} >
            <div className="container mx-auto px-2 sm:px-4">
                <h1 className="mb-8 text-center text-3xl sm:text-4xl font-bold text-white drop-shadow">Pendaftaran Agen</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="flex flex-col justify-between rounded-lg bg-white p-6 sm:p-8 shadow-lg mb-4 md:mb-0 ml-5">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-1">PAKET BASIC</h3>
                            <p className="text-lg sm:text-xl font-semibold text-black text-center mb-4 italic">Rp 1.000.000</p>
                            <div className="border-b border-black mb-4"></div>
                            <ul className="space-y-3 text-black text-left text-sm sm:text-base">
                                <li className="flex items-start"><span className="text-black mr-2 mt-1">-</span> <span>1 User ID Login</span></li>
                                <li className="flex items-start"><span className="text-black mr-2 mt-1">-</span> <span>Tanpa biaya bulanan</span></li>
                                <li className="flex items-start"><span className="text-black mr-2 mt-1">-</span> <span>Komisi 100% NTA</span></li>
                                <li className="flex items-start"><span className="text-black mr-2 mt-1">-</span> <span>Bisa upgrade keanggotaan</span></li>
                            </ul>
                        </div>
                        <button className="mt-8 w-full rounded bg-[#EF018F] px-4 py-2 font-semibold text-white hover:bg-pink-600 transition cursor-pointer">Lihat Rincian</button>
                    </div>
                    <form className="col-span-2 rounded-lg bg-white p-4 sm:p-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-2 mb-4">
                            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                                <label className="mb-1 block font-semibold text-sm">Jenis Keanggotaan</label>
                                <select name="jenis" value={form.jenis} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                                    <option value="Basic">Basic – Rp 1.000.000</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                                <label className="mb-1 block font-semibold text-sm">Username (opsional)</label>
                                <input type="text" name="username" value={form.username} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
                            </div>
                            <div className="w-full md:w-1/3 px-2">
                                <label className="mb-1 block font-semibold text-sm">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded border px-3 py-2 text-sm" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                                <label className="mb-1 block font-semibold text-sm">Nama Lengkap <span className="text-red-500">*</span></label>
                                <input type="text" name="nama" value={form.nama} onChange={handleChange} required className="w-full rounded border px-3 py-2 text-sm" />
                            </div>
                            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                                <label className="mb-1 block font-semibold text-sm">Nomor HP Utama <span className="text-red-500">*</span></label>
                                <input type="tel" name="hpUtama" value={form.hpUtama} onChange={handleChange} required className="w-full rounded border px-3 py-2 text-sm" />
                            </div>
                            <div className="w-full md:w-1/3 px-2">
                                <label className="mb-1 block font-semibold text-sm">Nomor HP Alternatif (opsional)</label>
                                <input type="tel" name="hpAlternatif" value={form.hpAlternatif} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-semibold text-sm">Alamat <span className="text-red-500">*</span></label>
                            <textarea name="alamat" value={form.alamat} onChange={handleChange} required className="w-full rounded border px-3 py-2 text-sm" />
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="mb-1 block font-semibold text-sm">Provinsi</label>
                                <select name="provinsi" value={form.provinsi} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                                    <option value="">Pilih Provinsi</option>
                                    {provinces.map((prov) => (
                                        <option key={prov.id} value={prov.name}>{prov.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="mb-1 block font-semibold text-sm">Nama Usaha (opsional)</label>
                                <input type="text" name="namaUsaha" value={form.namaUsaha} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" name="setuju" checked={form.setuju} onChange={handleChange} className="mr-2" />
                            <span className="text-xs sm:text-sm">
                                Dengan menekan tombol berikut, Anda setuju dengan{' '}
                                <a href="https://qrpay.co.id/terms" className="text-[#EF018F] underline" target="_blank" rel="noopener noreferrer">Syarat Ketentuan</a>{' '}
                                yang berlaku di qrpay.co.id
                            </span>
                        </div>
                        <button type="submit" className="w-full rounded-full bg-[#EF018F] px-6 py-3 text-base sm:text-lg font-semibold text-white transition duration-200 hover:bg-pink-600 disabled:opacity-50 cursor-pointer" disabled={!form.setuju}>
                            Daftar Sekarang
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormRegistrasiAgen;
