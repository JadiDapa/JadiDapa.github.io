import html from "../assets/image/html.png";
import css from "../assets/image/css.svg";
import javascript from "../assets/image/javascript.png";
import react from "../assets/image/react.svg";
import next from "../assets/image/next.png";
import sass from "../assets/image/sass.png";
import tailwind from "../assets/image/tailwind.png";
import mui from "../assets/image/mui.png";

import node from "../assets/image/node.png";
import express from "../assets/image/express.png";
import php from "../assets/image/php.png";
import laravel from "../assets/image/laravel.png";
import codeigniter from "../assets/image/codeigniter.png";
import mysql from "../assets/image/mysql.png";
import mongo from "../assets/image/mongo.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Skill = () => {
  const techs = {
    frontEnd: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "React",
        logo: react,
      },
      {
        name: "Next JS",
        logo: next,
      },
      {
        name: "SASS",
        logo: sass,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "MUI",
        logo: mui,
      },
    ],
    backEnd: [
      {
        name: "Node JS",
        logo: node,
      },
      {
        name: "Express JS",
        logo: express,
      },
      {
        name: "PHP",
        logo: php,
      },
      {
        name: "Laravel",
        logo: laravel,
      },
      {
        name: "My SQL",
        logo: mysql,
      },
      {
        name: "Mongo DB",
        logo: mongo,
      },
    ],
  };
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".myskill", { origin: "top" });
    sr.reveal(".fe, .fes", {
      origin: "left",
    });
    sr.reveal(".be, .bes", {
      origin: "right",
    });
  }, []);
  return (
    <section
      id="skill"
      className="overflow-hidden px-4 lg:px-28 py-5 min-h-[110vh]"
    >
      <div className="container mx-auto py-20">
        <h2 className="myskill md:text-6xl text-5xl text-center font-bold">
          MY <span className="custom-text-gradient"> TECH & SKILL</span>
        </h2>
        <div className="mt-12">
          <h3 className="fe text-center text-primary font-semibold text-3xl md:text-4xl">
            Front <span className="text-secondary">End</span>
          </h3>
          <div
            className="fes flex justify-center flex-wrap gap-4
           mt-3"
          >
            {techs.frontEnd.map((tech, index) => (
              <div
                key={index}
                className="bg-dark2 p-3 md:pt-4 md:py-2 md:px-4 w-[88px] md:w-[104px] aspect-square flex flex-col justify-center items-center gap-1 rounded-md hover:bg-transparent hover:text-secondary hover:border-primary border-transparent border duration-300"
              >
                <img
                  src={tech.logo}
                  className="w-5/6"
                  alt={tech.name + "logo"}
                />
                <div className="font-semibold md:text-[13px]  text-[11px]">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="be text-center text-primary font-semibold text-3xl md:text-4xl">
            Back <span className="text-secondary">End</span>
          </h3>
          <div
            className="bes flex justify-center flex-wrap gap-4
           mt-3"
          >
            {techs.backEnd.map((tech, index) => (
              <div
                key={index}
                className="bg-dark2 p-3 md:pt-4 md:py-2 md:px-4 w-[88px] md:w-[104px] aspect-square flex flex-col justify-center items-center gap-1 rounded-md hover:bg-transparent hover:text-secondary hover:border-primary border-transparent border duration-300"
              >
                <img
                  src={tech.logo}
                  className="w-5/6"
                  alt={tech.name + "logo"}
                />
                <div className="font-semibold md:text-[13px] text-center  text-[11px]">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
