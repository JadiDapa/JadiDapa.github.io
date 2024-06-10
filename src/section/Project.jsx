import alirsyad from '../assets/image/alirsyad.png';
import PLNHPUP6 from '../assets/image/PLNHPUP6.png';
import ynsect from '../assets/image/ynsect.png';
import nike from '../assets/image/nike.png';
import portfolio from '../assets/image/portfolio.png';
import spotify from '../assets/image/spotify.png';
import { BiLogoGithub } from 'react-icons/bi';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Project = () => {
  const projects = [
    {
      link: 'https://github.com/JadiDapa/al-irsyad',
      image: alirsyad,
      title: 'AL - IRYSAD  |  Mosque Profile'
    },
    {
      link: 'https://github.com/JadiDapa/distribution-tracking-app-fe',
      image: PLNHPUP6,
      title: 'Distribution & Inventory Management'
    },
    {
      link: 'https://github.com/zildjianvitoo/ynsect-fe',
      image: ynsect,
      title: 'Ynsect  |  Food Waste Management'
    },
    {
      link: 'https://github.com/JadiDapa/spotify-clone',
      image: spotify,
      title: 'Music Library App'
    },
    {
      link: 'https://github.com/JadiDapa/JadiDapa.github.io',
      image: portfolio,
      title: 'Personal Portfolio'
    },
    {
      link: 'https://nike-react-tailwind.vercel.app/',
      image: nike,
      title: 'Nike Landing Page  |  Learning Project'
    }
  ];
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.mypro', { origin: 'top' });
    sr.reveal('.projects', { origin: 'bottom' });
  }, []);

  return (
    <section id="project" className="px-4 py-5 overflow-hidden lg:px-28">
      <div className="container flex flex-col items-center py-10 mx-auto">
        <h2 className="text-5xl font-bold mypro md:text-6xl">
          MY <span className="custom-text-gradient">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 p-8 mt-12 projects md:p-0 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative p-3 duration-300 border border-transparent rounded-lg group bg-dark2 hover:border-primary hover:bg-transparent "
            >
              <div className="relative w-full overflow-hidden duration-300 border border-transparent rounded-lg group-hover:border-primary">
                <div className="absolute flex flex-col items-center justify-center w-full h-full gap-2 duration-300 translate-y-full group-hover:translate-y-0 bg-secondary/60">
                  <BiLogoGithub className="text-4xl" />
                  <a className="text-xl ">See The Code</a>
                </div>

                <img src={project.image} alt="" className="w-full duration-300 min-h-[250px]" />
              </div>
              <p className="mt-2 text-lg">{project.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
