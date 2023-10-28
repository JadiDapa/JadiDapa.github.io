import alirsyad from "../assets/image/alirsyad.png";
import afdanews from "../assets/image/afdanews.png";
import ytclone from "../assets/image/ytclone.png";
import nike from "../assets/image/nike.png";
import weather from "../assets/image/weather.png";
import cart from "../assets/image/cart.png";
import { GoLinkExternal } from "react-icons/go";

const Project = () => {
  const projects = [
    {
      image: alirsyad,
      title: "AL - IRYSAD  |  Mosque Profile",
    },
    {
      image: afdanews,
      title: "Afda News  |  Article & News Web",
    },
    {
      image: ytclone,
      title: "Youtube Clone  |  API Management",
    },
    {
      image: nike,
      title: "Nike Landing Page  |  Learning Project",
    },
    {
      image: weather,
      title: "Weather Forecast  |  Learning Project",
    },
    {
      image: cart,
      title: "E-Commerence  |  Learning Project",
    },
  ];

  return (
    <section id="project" className="overflow-hidden px-4 lg:px-28 py-5">
      <div className="container mx-auto py-20 flex items-center flex-col">
        <h2 className="font-bold text-6xl">
          MY <span className="custom-text-gradient">PROJECTS</span>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group duration-300 p-3 bg-dark2 hover:border-primary border border-transparent rounded-lg relative hover:bg-transparent"
            >
              <div className="border border-transparent duration-300 group-hover:border-primary rounded-lg overflow-hidden relative w-full">
                <div className="absolute group-hover:translate-y-0 translate-y-full bg-secondary/60 duration-300 w-full h-full flex flex-col justify-center items-center gap-2">
                  <GoLinkExternal className="text-4xl" />
                  <a className="text-xl ">See the Project</a>
                </div>

                <img
                  src={project.image}
                  alt=""
                  className="w-full duration-300"
                />
              </div>
              <p className="mt-2 text-lg">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
