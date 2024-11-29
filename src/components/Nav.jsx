import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
                <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="inline-block object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
          >
            <ul className="list-none bg-white flex justify-end items-start flex-col gap-5 rounded-lg shadow-md padding-x">
              {navLinks.map((link) => (
                <li
                  href={link.href}
                  key={link.id}
                  className={`${
                    active === link.label ? "text-black" : "text-gray-500"
                  } regular - 16 text-gray-50
                    flexCenter cursor-pointer pb-1.5 transition - all hover:font-bold`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.label);
                  }}
                >
                  <a
                    href={link.href}
                    className="font-montserrat leading-normal text-lg
                    text-slate-gray"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
