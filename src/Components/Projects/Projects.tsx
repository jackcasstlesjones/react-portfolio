import ProjectSection from "./ProjectSection/ProjectSection";
import olympiaTree from "../../assets/olympiatree.png";
import zubi from "../../assets/zubi.png";
import wedgy from "../../assets/wedgy.png";

const Projects = () => {
  const content = [
    {
      title: "OlympiaTree",
      image: olympiaTree,
      tech: "React, Panzoom",
      copy: "An educational resource designed to teach students about the family tree of the Greek Gods. Made using React, this project involved translating <a>this</a> family tree, found on Quora, into this grid layout using Figma. Each God's information cards were designed in Figma, and the information copy adapted from Theoi.",
    },
    {
      title: "zubi",
      image: zubi,
      tech: "TypeScript, React, Tailwind CSS, SQLite, PassportJS",
      copy: "Zubi is the prototype for a platform to connect volunteer tutors with underprivileged learners. When a student logs onto the site, they view a specific tutor's availability and make a booking for an available slot. This full stack app uses an SQLite database, features authentication using PassportJS in the backend, and has a carefully designed frontend built with React, Tailwind CSS and TailwindUI.",
    },
    {
      title: "Wedgy",
      image: wedgy,
      tech: "TypeScript, React, Tailwind CSS, SQLite, PassportJS",
    },
  ];

  return (
    <>
      {content.map((project, index) => {
        console.log(project.title, index);
        return <ProjectSection project={project} />;
      })}
      {/* <ProjectSection imageSrc={olympiaTree} content={content} key={index} /> */}
    </>
  );
};

export default Projects;
