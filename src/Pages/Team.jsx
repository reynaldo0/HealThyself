import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Swiper from 'swiper';

import { IonIcon } from '@ionic/react';

const Team = () => {

    return (
        <section className='bg-slate-600'>
            <Navbar
                teamText="Kembali ke Home"
                startText="Mulai Sekarang!"
                teamLink="/" // Link ke halaman home
            />
        </section>
    );
};

export default Team;
