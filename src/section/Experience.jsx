import { LiaToolsSolid } from "react-icons/lia";
import illust from "../assets/image/illust.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Experience = () => {
  const timelines = [
    {
      date: "September 2022",
      title: "Start of Journey",
      description:
        "My first code was created at the start of studying in Sriwijaya University",
    },
    {
      date: "December 2022",
      title: "First Fullstack Project",
      description:
        "Created a Blog site as my Fullstack Project Task in my college",
    },
    {
      date: "June 2023 - Present",
      title: "Fullstack Developer & Freelancer",
      description:
        "I'm freelancing and still keep learning to level up my coding skill",
    },
    {
      date: "August 2023 - December 2023",
      title: "Mentor for Juniors",
      description:
        "I'm a coding mentor in my college, and im teaching my juniors about web development",
    },
  ];
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".experience", { origin: "top" });
    sr.reveal(".expbtn, .illust", { origin: "bottom" });
    sr.reveal(".expdesc", {
      origin: "left",
    });
    sr.reveal(".timeline", {
      origin: "right",
    });
  }, []);
  return (
    <section id="experience" className="px-4 lg:px-28 py-5 bg-dark2">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="text-5xl md:text-6xl font-bold experience">
            MY <span className="custom-text-gradient">EXPERIENCE</span>
          </p>
          <p className="expdesc text-sm md:text-base text-gray-50 my-4">
            These are my coding on web development journey from the start until
            right now!
          </p>
          <a
            href="#project"
            className="expbtn mr-auto hover:bg-primary text-primary hover:text-dark2 rounded-md py-2 px-4 border border-primary hover:border-transparent duration-300 flex gap-2 icons-box"
          >
            My Projects
            <span className=" text-2xl">
              <LiaToolsSolid />
            </span>
          </a>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky timeline">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 border-white absolute h-full border right-1/2"></div>
              <div className="border-2-2 border-white absolute h-full border left-1/2"></div>
              {timelines.map((timeline, index) => {
                return (
                  <div
                    key={index}
                    className={`mb-8 flex justify-between ${
                      index % 2 === 0 && "flex-row-reverse"
                    } items-center w-full left-timeline`}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div
                      className={`order-1 w-5/12 px-1 py-4 ${
                        index % 2 === 0 && "text-right"
                      }`}
                    >
                      <p className="mb-3 text-base text-primary">
                        {timeline.date}
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        {timeline.title}
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50">
                        {timeline.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <img className="illust mx-auto -mt-36 md:-mt-36" src={illust} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
