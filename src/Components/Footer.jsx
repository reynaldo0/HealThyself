import React from 'react';

const Footer = ({ backgroundColor = 'transparent', children }) => {
    return (
        <footer style={{ backgroundColor }} className="p-4 py-6 lg:py-8 bg-slate-800">
            <div className="container mx-auto w-full">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 flex flex-col justify-between md:mb-0">
                        <a href="/" className="flex items-center">
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
                                    <a href="https://www.smkn46jaktim.sch.id/" className="hover:underline">SMK Negeri 46 Jakarta</a>
                                </li>
                                <li className="mb-4 flex items-center gap-3 text-base">
                                    <ion-icon name="mail"></ion-icon>
                                    <a href="mailto:healthyself@gmail.com" className="hover:underline">Healthyself@gmail.com</a>
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
                                    <a href="/baby" className="hover:underline">Bayi</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/child" className="hover:underline">Anak-Anak</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/teen" className="hover:underline">Remaja</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/adult" className="hover:underline">Dewasa</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/elderly" className="hover:underline">Lansia</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Sumber Data
                            </h2>
                            <ul className="font-medium text-slate-300">
                                {children}
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
                                <li className="mb-4">
                                    <a href="https://shutterstock.com/" className="hover:underline">shutterstock</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://unsplash.com/" className="hover:underline">unsplash</a>
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

Footer.Source = ({ link, title }) => {
    return (
        <li className="mb-4">
            <a href={link} className="lowercase hover:underline">{title}</a>
        </li>
    )
}

export default Footer;
