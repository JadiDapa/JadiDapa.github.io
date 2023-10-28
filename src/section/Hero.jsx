import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsInfoCircle,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Blob from "../components/Blob";
import { ButtonA } from "../components/Button";

const Hero = () => {
  const icons = [
    <BsInstagram />,
    <FaFacebookF />,
    <BsGithub />,
    <BsLinkedin />,
  ];
  return (
    <section id="home" className="overflow-hidden pt-28 px-4 lg:px-28 pb-5">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 ">
            <div className="texts flex flex-col justify-center gap-3 mb-6">
              <h4 className="text-2xl custom-text-gradient">Hi, Its Me!</h4>
              <h1 className="font-bold text-5xl md:text-6xl">Daffa Althaf R</h1>
              <h2 className="font-semibold text-2xl md:text-3xl">
                And I&apos;m a Fullstack Developer
              </h2>
              <p className="text-base md:text-lg">
                Student From Sriwijaya University, studying Electrical Enginner
                for 1.5 Year
              </p>
            </div>
            <div className="flex gap-x-4 mb-6">
              {icons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-xl rounded-md border-2 text-primary border-primary hover:bg-primary hover:text-dark2 duration-300 icons-box"
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              <ButtonA
                href={"#about"}
                text={"About Me"}
                icon={<BsInfoCircle />}
              />
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Blob />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
