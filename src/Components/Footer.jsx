import React from 'react';

const Footer = ({ backgroundColor = 'transparent' }) => {
    return (
        <footer style={{ backgroundColor }} className="p-4 py-6 lg:py-8">
            <div className="container mx-auto w-full">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 flex flex-col justify-between md:mb-0">
                        <a href="#" className="flex items-center">
                            <img
                                src="/logo.png"
                                className="me-3 h-auto w-[180px]"
                                alt="FlowBite Logo"
                            />
                        </a>

                        <div className="mb-5 mt-5 md:mb-0">
                            <h2 className="mb-6 text-base font-semibold uppercase text-white">
                                Hubungi Kami
                            </h2>
                            <ul className="font-medium text-slate-300">
                                <li className="mb-4 flex items-center gap-3 text-base">
                                    <ion-icon name="location"></ion-icon>
                                    <a href="#" className="hover:underline">SMK Negeri 46 Jakarta</a>
                                </li>
                                <li className="mb-4 flex items-center gap-3 text-base">
                                    <ion-icon name="mail"></ion-icon>
                                    <a href="#" className="hover:underline">rebellumin@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Akses Konten
                            </h2>
                            <ul className="font-medium text-slate-300">
                                <li className="mb-4">
                                    <a href="#home" className="hover:underline">Beranda</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#about" className="hover:underline">Tentang</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#kasus" className="hover:underline">Kasus</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#pengaruh" className="hover:underline">Pengaruh</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#data" className="hover:underline">Data</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#dokumentasi" className="hover:underline">Dokumentasi</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Sumber Data
                            </h2>
                            <ul className="font-medium text-slate-300">
                                <li className="mb-4">
                                    <a href="https://Detik.com" className="lowercase hover:underline">Detik.com</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://Kompasiana.com" className="lowercase hover:underline">Kompasiana</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://Channel9.id" className="lowercase hover:underline">Channel9.id</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://Goodstats.id" className="lowercase hover:underline">Goodstats.id</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://pusiknas.polri.go.id/" className="lowercase hover:underline">pusiknas.polri</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.haibunda.com/" className="lowercase hover:underline">haibunda.com</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Credit
                            </h2>
                            <ul className="font-medium text-slate-300">
                                <li className="mb-4">
                                    <a href="https://www.freepik.com/" className="hover:underline">Freepik</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-center text-sm text-white">Dibuat oleh tim HealThyself</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
