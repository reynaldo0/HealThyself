import React, { useEffect } from 'react';
import Navbar from '../Components/HomeNav';

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
