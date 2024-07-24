import Image from "next/image";
import Link from "next/link";

import aizen from "@/public/work/keepeasy.png";
import kamui from "@/public/work/greencardlottery.png";
import pokedex from "@/public/work/energytravel.png";
import evo from "@/public/work/bulger.png";
import notion from "@/public/work/privateclinic.png";
import nike from "@/public/work/smkhotel.png";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Keep easy Logistics",
      description: "Oddiy websayt",
      link: "https://keepeasy.info/",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "Green Card Lottery",
      description: "3D websayt",
      link: "https://greencardlotterry.com/",
      target: "_self",
    },
    {
      id: 3,
      image: pokedex,
      title: "Energy Travel",
      description: "Oddiy websayt",
      link: "https://pokedex-polly.netlify.app/",
      target: "_self",
    },
    {
      id: 4,
      image: evo,
      title: "The Bulger",
      description: "Web-platforma",
      link: "https://order.thebullger.ca/",
      target: "_blank",
    },
    {
      id: 5,
      image: nike,
      title: "Smk Hotel",
      description: "Web-platforma",
      link: "https://smkhotel.com/",
      target: "_blank",
    },
    {
      id: 6,
      image: notion,
      title: "Private clinic",
      description: "Web-Platforma",
      link: "https://privateclinic.vercel.app/",
      target: "_blank",
    },

  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
