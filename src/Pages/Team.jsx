import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Swiper from 'swiper';
import { IonIcon } from '@ionic/react';

const Team = () => {
    useEffect(() => {
        // Inisialisasi Swiper
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    }, []);

    return (
        <section className='bg-slate-600'>
            <Navbar
                teamText="Kembali ke Home"
                startText="Mulai Sekarang!"
                teamLink="/" // Link ke halaman home
            />
            <div class="container">
                <h1
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    class="text-center font-radioCasnada text-3xl font-semibold md:text-4xl"
                >
                    Tim <span class="text-yellow">kami</span>
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    class="text-center text-base text-secondary-200"
                >
                    Bersama <span class="font-bold">Rebellum</span>, kenakalan remaja
                    <span class="font-bold">terhapuskan!</span>
                </p>

                {/* <!-- Slider main container --> */}
                <div class="swiper team w-full sm:min-w-[670px] md:w-1/2">
                    {/* <!-- Additional required wrapper --> */}
                    <div class="swiper-wrapper my-8">
                        {/* <!-- Slides -->
                        <!-- salman --> */}
                        <div class="swiper-slide">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="px-2 py-3">
                                            <img
                                                alt="team image"
                                                src="./assets/team/salman.jpg"
                                                class="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                                            />
                                            <div class="my-4">
                                                <h1 class="text-center text-base font-bold">
                                                    M. Salman Al Farisi
                                                </h1>
                                                <p class="text-center text-sm">Leader, data analyst</p>
                                            </div>

                                            <div
                                                class="grid w-full grid-cols-3 justify-items-center gap-3"
                                            >
                                                <a
                                                    href="https://www.instagram.com/avlfarizii/"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-instagram"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-linkedin"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="https://github.com/avlfarizii"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-github"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back flex items-center justify-center">
                                        <p>"Jangan lupa titik koma"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- nazla --> */}
                        <div class="swiper-slide">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="px-2 py-3">
                                            <img
                                                alt="team image"
                                                src="./assets/team/nazla.jpg"
                                                class="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                                            />
                                            <div class="my-4">
                                                <h1 class="text-center text-base font-bold">
                                                    Nazla Rahma
                                                </h1>
                                                <p class="text-center text-sm">UI/UX, Illustrator</p>
                                            </div>

                                            <div
                                                class="grid w-full grid-cols-3 justify-items-center gap-3"
                                            >
                                                <a
                                                    href="https://www.instagram.com/nazlarhm96"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-instagram"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-linkedin"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="https://github.com/zlaraa"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-github"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back flex items-center justify-center">
                                        <p>"Jangan lupa titik koma"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aldo --> */}
                        <div class="swiper-slide">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="px-2 py-3">
                                            <img
                                                alt="team image"
                                                src="./assets/team/aldo.jpg"
                                                class="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                                            />
                                            <div class="my-4">
                                                <h1 class="text-center text-base font-bold">
                                                    Reynaldo Yusellino
                                                </h1>
                                                <p class="text-center text-sm">
                                                    Programmer, 3D designer
                                                </p>
                                            </div>

                                            <div
                                                class="grid w-full grid-cols-3 justify-items-center gap-3"
                                            >
                                                <a
                                                    href="https://www.instagram.com/rynldysllino"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-instagram"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="https://www.linkedin.com/in/reynaldo-yusellino-564724270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-linkedin"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="https://github.com/reynaldo0"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-github"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back flex items-center justify-center">
                                        <p>"Jangan lupa titik koma"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- rama --> */}
                        <div class="swiper-slide">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="px-2 py-3">
                                            <img
                                                alt="team image"
                                                src="./assets/team/rama.jpg"
                                                class="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                                            />
                                            <div class="my-4">
                                                <h1 class="text-center text-base font-bold">
                                                    Ramadina A.
                                                </h1>
                                                <p class="text-center text-sm">Programmer</p>
                                            </div>

                                            <div
                                                class="grid w-full grid-cols-3 justify-items-center gap-3"
                                            >
                                                <a
                                                    href="https://www.instagram.com/ramtxh"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-instagram"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-linkedin"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="https://www.github.com/ramarfx"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-github"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back flex items-center justify-center">
                                        <p>"Jangan lupa titik koma"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- akmal --> */}
                        <div class="swiper-slide">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="px-2 py-3">
                                            <img
                                                alt="team image"
                                                src="./assets/team/akmal.jpg"
                                                class="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                                            />
                                            <div class="my-4">
                                                <h1 class="text-center text-base font-bold">
                                                    M. Akmal Saban
                                                </h1>
                                                <p class="text-center text-sm">Programmer</p>
                                            </div>

                                            <div
                                                class="grid w-full grid-cols-3 justify-items-center gap-3"
                                            >
                                                <a
                                                    href="https://www.instagram.com/m.akmal.saban"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-instagram"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-linkedin"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                                <a
                                                    href="https://github.com/AkmaldanKamu"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                                                >
                                                    <ion-icon
                                                        name="logo-github"
                                                        class="text-white"
                                                    ></ion-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back flex items-center justify-center">
                                        <p>"Jangan lupa titik koma"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- If we need pagination -->
                    <!-- <div class="swiper-pagination"></div> -->
                    <!-- If we need navigation buttons --> */}
                    <div class="flex items-center justify-center gap-5">
                        <button
                            class="button-prev flex h-[50px] w-[50px] items-center justify-center rounded-full border border-yellow bg-transparent text-yellow transition ease-in-out hover:bg-yellow hover:text-white"
                        >
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                        <button
                            class="button-next flex h-[50px] w-[50px] items-center justify-center rounded-full border border-yellow bg-transparent text-yellow transition ease-in-out hover:bg-yellow hover:text-white"
                        >
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
