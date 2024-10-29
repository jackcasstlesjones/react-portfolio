import {
  ServerIcon,
  AcademicCapIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/20/solid";

function getIcon(icon: string) {
  switch (icon) {
    case "hat":
      return (
        <AcademicCapIcon
          className="mt-1 h-5 w-5 flex-none text-jackYellow"
          aria-hidden="true"
        />
      );
    case "mouse":
      return (
        <CursorArrowRaysIcon
          className="mt-1 h-5 w-5 flex-none text-jackYellow"
          aria-hidden="true"
        />
      );
    case "box":
      return (
        <ServerIcon
          className="mt-1 h-5 w-5 flex-none text-jackYellow"
          aria-hidden="true"
        />
      );
    default:
      return null;
  }
}

interface Bullet {
  heading: string;
  info: string;
  icon: string;
}

interface Project {
  title: string;
  image: string;
  tech: string;
  copy: string;
  link?: string;
  bullets: Bullet[];
}

interface ProjectSectionProps {
  project: Project;
}
export default function ProjectSection({ project }: ProjectSectionProps) {
  return (
    <div
      id="projects"
      className=" w-full relative isolate overflow-hidden py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      {" "}
      <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
        {/* Top-left shape */}
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute top-0 left-0 aspect-[1155/678] w-[36.125rem] max-w-none rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />

        {/* Bottom-right shape */}
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute bottom-0 right-0 aspect-[1155/678] w-[36.125rem] max-w-none -rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="max-w-xs sm:max-w-xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 md:w-full">
        {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 sm:max-w-sm md:w-full"> */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 tracking-normal text-pretty text-4xl font-semibold  text-jackYellow sm:text-5xl hover:text-jackYellow hover:cursor-pointer">
                {project.title}
              </h1>
              <p className="mt-6 text-2xl leading-8 tracking-wide text-gray-50">
                {project.tech}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {project.link ? (
            <a href={project.link}>
              <img
                alt=""
                src={project.image}
                className="w-full  max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] cursor-pointer"
              />
            </a>
          ) : (
            <img
              alt=""
              src={project.image}
              className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
            />
          )}
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-relaxed text-gray-50 lg:max-w-lg">
              <p>{project.copy}</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-50">
                {project.bullets.map((bullet) => {
                  return (
                    <li className="flex gap-x-3">
                      {getIcon(bullet.icon)}
                      <span>
                        <strong className="font-semibold text-gray-100">
                          {bullet.heading}
                        </strong>{" "}
                        {bullet.info}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
