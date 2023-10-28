import { BlobAbout } from "../components/Blob";
import { LiaToolsSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden px-4 lg:px-28 py-5 bg-dark2 min-h-screen"
    >
      <div className="container mx-auto md:flex py-6 md:py-20">
        <div className="hidden md:w-1/2 md:block">
          <BlobAbout />
        </div>
        <div className="w-full md:w-1/2 py-20">
          <div className="text">
            <h2 className="font-bold text-5xl md:text-6xl">
              ABOUT <span className="custom-text-gradient">ME</span>
            </h2>
            <h3 className="mt-5 font-semibold text-3xl md:text-4xl">
              FullStack Web Developer
            </h3>
            <p className="mt-3 md:text-lg leading-7">
              I&apos;m A FullStack Web Developer with coding experience more
              than a year. Also being a college student from Sriwijaya
              University majoring Electrical Engineer. Living in Indonesia
              especially Palembang city. Ive been a freelancer and coding mentor
              for my juniors.
            </p>
          </div>
          <div className="button flex mt-8 gap-8">
            <a
              href="#project"
              className="py-1.5 px-3 text-xl rounded-md border-2 text-primary border-primary hover:bg-primary hover:text-dark2 duration-300 icons-box flex items-center gap-4"
            >
              See Projects
              <span className="text-2xl">
                <LiaToolsSolid />
              </span>
            </a>
            <a
              href="#contact"
              className="py-1.5 px-3 text-xl rounded-md border-2 text-primary border-primary hover:bg-primary hover:text-dark2 duration-300 icons-box flex items-center gap-4"
            >
              Hire Me{" "}
              <span className="text-2xl">
                <HiOutlineMail />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
