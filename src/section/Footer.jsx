import { BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <section
      id="footer"
      className="overflow-hidden px-4 lg:px-28 py-5 relative bg-dark2"
    >
      <div className="container mx-auto py-10 flex flex-col items-center justify-center gap-8">
        <div className="flex gap-1 items-center">
          <img src={logo} className="w-14 mr-3" alt="Logo" />
          <div className="custom-text-gradient text-3xl font-semibold">
            DAFFA AR
          </div>
        </div>
        <div className="flex gap-6">
          <div className="p-3 bg-white rounded-full text-dark2 text-xl">
            <BsInstagram />
          </div>
          <div className="p-3 bg-white rounded-full text-dark2 text-xl">
            <BsTwitter />
          </div>
          <div className="p-3 bg-white rounded-full text-dark2 text-xl">
            <FaFacebookF />
          </div>
          <div className="p-3 bg-white rounded-full text-dark2 text-xl">
            <BsWhatsapp />
          </div>
          <div className="p-3 bg-white rounded-full text-dark2 text-xl">
            <BsLinkedin />
          </div>
        </div>
        <div className="font-thin">
          © 2023 Daffaa Althaf R. All rights reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
