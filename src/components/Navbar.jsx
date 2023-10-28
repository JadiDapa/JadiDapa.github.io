import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/image/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const links = [
    { action: "#home", name: "Home" },
    { action: "#about", name: "About" },
    { action: "#skill", name: "Skills" },
    { action: "#experience", name: "Experience" },
    { action: "#project", name: "Projects" },
    { action: "#contact", name: "Contact" },
  ];
  return (
    <nav className="" id="hero">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 lg:px-20 py-5">
        <a
          href="https://github.com/JadiDapa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src={logo} className="w-10 mr-3" alt="Logo" />
          <div className="custom-text-gradient text-2xl font-semibold">
            DAFFA
          </div>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-gradient text-xl rounded-full px-6 py-1.5 text-center mr-3 md:mr-0   hover:-translate-y-0.5 duration-300 btn-cv"
          >
            Get CV
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center px-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          >
            <RxHamburgerMenu className="w-5 h-5" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {links.map((link, index) => {
              return (
                <li key={index}>
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
      </div>
    </nav>
  );
};

export default Navbar;
