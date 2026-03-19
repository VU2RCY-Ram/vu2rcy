import Image from "next/image";
import mmdvm from "../public/mmdvm.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: mmdvm,
      title: "MMDVM",
      description:
        "Enables versatile communication across digital amateur radio networks.",
      link: "/work/mmdvm",
      target: "_self",
    },
    // {
    //   id: 2,
    //   image: XLX,
    //   title: "XLX",
    //   description: "XLX: Enabling Multi-Protocol Ham Communication",
    //   link: "http://xlx146-india.ddns.net/",
    //   target: "_blank",
    // },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 md:gap-6">
      {data.map((project) => {
        return (
          <Link
            href={project.link}
            target={project.target}
            key={project.id}
            onClick={() => {
              project.title === "Portfolio"
                ? alert("You are already on this site! 🤩")
                : "";
            }}
            className="landing-panel flex flex-col overflow-hidden max-w-md w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.67rem)] cursor-pointer hover:border-amber-500/40 dark:hover:border-[#39ff14]/40 hover:shadow-lg dark:hover:shadow-[0_0_16px_rgba(57,255,20,0.12)] transition-all duration-300"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col">
              <h2 className="landing-h2 text-lg md:text-xl mb-2">
                {project.title}
              </h2>
              <p className="landing-body text-sm sm:text-base text-justify w-full">
                {project.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectCard;
