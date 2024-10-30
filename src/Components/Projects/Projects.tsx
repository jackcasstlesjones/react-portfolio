import ProjectSection from "./ProjectSection/ProjectSection";
import olympiaTree from "../../assets/olympiatree2.png";
import zubi from "../../assets/zubi3.png";
import wedgy from "../../assets/wedgy.png";

const Projects = () => {
  const content = [
    {
      title: "zubi",
      image: zubi,
      tech: "TypeScript, React, Tailwind CSS, SQLite, PassportJS",
      copy: "Zubi is the prototype for a platform to connect volunteer tutors with underprivileged learners. When a student logs onto the site, they view a specific tutor's availability and make a booking for an available slot. This full stack app uses an SQLite database, features authentication using PassportJS in the backend, and has a carefully designed frontend built with React, Tailwind CSS and TailwindUI.",
      link: "https://zubi-edu.netlify.app/",
      bullets: [
        {
          heading: "Targeted scheduling",
          info: "Students can easily manage and view available time slots.",
          icon: "hat",
        },
        {
          heading: "Secure access",
          info: "Authentication powered by PassportJS for a safe, streamlined login experience.",
          icon: "mouse",
        },
        {
          heading: "Efficient learning",
          info: "A straightforward UI keeps students focused on connecting with tutors.",
          icon: "box",
        },
      ],
    },
    {
      title: "OlympiaTree",
      image: olympiaTree,
      tech: "React, Panzoom",
      copy: "An educational resource designed to teach students about the family tree of the Greek Gods. Made using React, this project involved translating a family tree, found on Quora, into this grid layout using Figma. Each God's information cards were designed in Figma, and the information copy adapted from Theoi.",
      link: "https://olympiatree.netlify.app/",
      bullets: [
        {
          heading: "Interactive family tree",
          info: "Explore the complex relationships of Greek mythology in a dynamic manner.",
          icon: "hat",
        },
        {
          heading: "Detailed profiles",
          info: "Each god has a unique profile with rich, informative content.",
          icon: "mouse",
        },
        {
          heading: "Smooth navigation",
          info: "Responsive pan and zoom functionality enhances user interaction.",
          icon: "box",
        },
      ],
    },
    {
      title: "Wedgy",
      image: wedgy,
      tech: "TypeScript, React, Tailwind CSS, Figma, Express",
      copy: "Designed and built the website for musical outfit Wedgy. This involved a lengthy design process to make sure that the product fitted the band's music. Integrated a tour calendar using third-party React components, as well as integrating Bandcamp and social links to increase conversion rates.",
      link: "https://wedgy.netlify.app/",
      bullets: [
        {
          heading: "Bespoke design",
          info: "Tone and mood that integrate seamlessly with band's existing art.",
          icon: "hat",
        },
        {
          heading: "Performance focused",
          info: "Compressed assets and performant code ensure seamless experience.",
          icon: "mouse",
        },
        {
          heading: "Musical engagement",
          info: "Embedded Bandcamp to drive audience interaction.",
          icon: "box",
        },
      ],
    },
  ];

  return (
    <>
      {content.map((project, index) => {
        console.log(project.title, index);
        return <ProjectSection project={project} />;
      })}
    </>
  );
};

export default Projects;
