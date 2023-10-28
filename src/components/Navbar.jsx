import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/image/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const links = [
    { action: "#home", name: "Home" },
    { action: "#about", name: "About" },
    { action: "#skill", name: "Skills" },
    { action: "#experience", name: "Experience" },
    { action: "#project", name: "Projects" },
    { action: "#contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 max-md:bg-dark1 ${
        isScroll ? "glassm" : ""
      }`}
      id="hero"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 lg:px-20 py-5">
        <a
          href="https://github.com/JadiDapa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src={logo} className="w-10 mr-3" alt="Logo" />
          <div className="custom-text-gradient text-2xl font-semibold">
            DAFFA AR
          </div>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="flex gap-2 text-white bg-gradient text-xl rounded-full px-6 py-1.5 text-center mr-3 md:mr-0   hover:-translate-y-0.5 duration-300 btn-cv"
          >
            Get CV
            <span className="text-2xl">
              <BsDownload />
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="duration-300 hover:text-primary inline-flex items-center px-3  justify-center text-sm text-gray-500 rounded-lg md:hidden"
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
        </div>
        {/* Desktop */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="hover:border-primary border-b-2 border-transparent duration-300"
                >
                  <a
                    href={link.action}
                    className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 ${
                      active === link.name
                        ? "custom-text-gradient font-semibold"
                        : "text-white"
                    }`}
                    onClick={() => setActive(link.name)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile */}
        <div
          className={`absolute left-0 h-screen bg-dark1 top-20 justify-between flex flex-col w-4/6 md:hidden ease-out duration-300 border-t-2 border-dark2/30 ${
            isOpen ? "translate-x-0" : "-translate-x-96"
          }`}
        >
          <ul className="flex flex-col text-xl py-4 border-gray-100 rounded-lg  ">
            {links.map((link, index) => {
              return (
                <li key={index} className="">
                  <a
                    href={link.action}
                    className={`block py-3 pl-8 pr-4 hover:text-primary ${
                      active === link.name
                        ? "custom-text-gradient font-semibold"
                        : "text-white"
                    }`}
                    onClick={() => setActive(link.name)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
