const HeroButton = ({ to = '#', circle = 'bg-baby-normal', textColor = 'text-baby-normal' }) => {
    return (<button
        className={`learn-more ${textColor} relative group inline-block h-auto w-48 cursor-pointer border-none bg-transparent align-middle font-radioCasnada text-inherit outline-none`}
        onClick={() => window.location.href = to}
        data-aos="fade-up"
        data-aos-easing="ease-in-out" data-aos-duration="900"
    >
        <span className={`circle ${circle}`} aria-hidden="true">
            <span className="icon arrow"></span>
        </span>
        <span className={`button-text translate-x-2 ${textColor} group-hover:text-white`}>Selengkapnya</span>
    </button>);
}

export default HeroButton;