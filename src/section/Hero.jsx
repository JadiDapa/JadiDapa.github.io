import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsInfoCircle,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Blob from "../components/Blob";
import { ButtonA } from "../components/Button";
import TypedText from "../components/TypedText";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  const icons = [
    <BsInstagram />,
    <FaFacebookF />,
    <BsGithub />,
    <BsLinkedin />,
  ];
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal("#hi", { origin: "top" });
    sr.reveal("#icons,  #buttonAbout", {
      origin: "bottom",
    });
    sr.reveal("#name, .typed, #desc", {
      origin: "left",
    });
    sr.reveal(".bounce", {
      origin: "right",
    });
  }, []);

  return (
    <section id="home" className="overflow-hidden pt-28 px-4 lg:px-28 pb-5">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 ">
            <div className="texts flex flex-col justify-center gap-3 mb-6">
              <h4 id="hi" className="text-2xl custom-text-gradient">
                Hi, Its Me!
              </h4>
              <h1 id="name" className="font-bold text-5xl md:text-6xl">
                Daffa Althaf R
              </h1>
              <h2 className="typed font-semibold text-2xl md:text-3xl">
                And I&apos;m a{" "}
                <span className=" custom-text-gradient">
                  <TypedText />
                </span>
              </h2>
              <p id="desc" className="text-base md:text-lg">
                Student From Sriwijaya University, studying Electrical Enginner
                for 1.5 Year
              </p>
            </div>
            <div id="icons" className="flex gap-x-4 mb-6">
              {icons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    className="p-2 text-xl rounded-md border-2 text-primary border-primary hover:bg-primary hover:text-dark2 duration-300 icons-box"
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
            <div id="buttonAbout" className="flex items-center gap-2">
              <ButtonA
                href={"#about"}
                text={"About Me"}
                icon={<BsInfoCircle />}
              />
            </div>
          </div>
          <div className="md:w-1/2 relative bounce translate-y-12">
            <Blob />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
