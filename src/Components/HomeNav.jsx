import { useNavigate } from 'react-router-dom';

const Navbar = ({ teamText = "Team", teamLink = "/", direction = "left" }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const container = document.querySelector('.page-container');
    if (direction === 'left') {
      container.classList.add('slide-out-left');
    } else {
      container.classList.add('slide-in-right');
    }
    setTimeout(() => {
      navigate(teamLink);
    }, 500);
  };

  return (
    <div className="relative z-10 w-full max-w-screen-xl flex flex-wrap items-center bg-none justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo.png" className="h-auto w-40" alt="Logo" />
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          onClick={handleNavigation}
          className="text-white bg-secondary hover:bg-secondary/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
        >
          {teamText}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
