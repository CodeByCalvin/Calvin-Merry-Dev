import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../css/projects.css";

export default function Projects() {
  const tech = [
    {
      name: "React",
      colour: "#61DAFB",
      logo: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "JavaScript",
      colour: "#F7DF1E",
      logo: "https://skillicons.dev/icons?i=javascript",
    },
    {
      name: "HTML",
      colour: "#E34F26",
      logo: "https://skillicons.dev/icons?i=html",
    },
    {
      name: "CSS",
      colour: "#1572B6",
      logo: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "Node.js",
      colour: "#689F63",
      logo: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "Express.js",
      colour: "#000000",
      logo: "https://skillicons.dev/icons?i=express",
    },
    {
      name: "MongoDB",
      colour: "#47A248",
      logo: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      name: "APIs",
      colour: "#BDBDBD",
      logo: `${process.env.PUBLIC_URL}/projectImgs/apilogo.png`,
    },
    {
      name: "Bootstrap",
      colour: "#7952B3",
      logo: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      name: "Material UI",
      colour: "#0081CB",
      logo: "https://skillicons.dev/icons?i=materialui",
    },
  ];

  const getTechByName = (name) => {
    return tech.find((t) => t.name === name);
  };

  const projects = [
    {
      title: "Language Learning App 📚",
      description:
        "This is a full-stack language learning app which uses spaced repetition to help users learn a new language. The user can create an account, choose a language to learn, and then start learning. The app will track the user's progress and show them their score.",
      image: `${process.env.PUBLIC_URL}/projectImgs/languagelearningappimg.png`,
      repo: "www.test.com",
      demo: "www.test.com",
      techStack: [
        getTechByName("React"),
        getTechByName("JavaScript"),
        getTechByName("Node.js"),
        getTechByName("MongoDB"),
        getTechByName("Express.js"),
        getTechByName("HTML"),
        getTechByName("CSS"),
        getTechByName("APIs"),
      ],
    },
    {
      title: "Calvin's Portfolio Website 💻",
      description:
        "This is my portfolio website, which I built using React and Material UI. I wanted to create a website that was simple, clean, and easy to navigate. I also wanted to showcase some of my projects and skills.",
      image: `${process.env.PUBLIC_URL}/projectImgs/devportfolioimg.png`,
      repo: "www.test.com",
      demo: "www.test.com",
      techStack: [
        getTechByName("React"),
        getTechByName("Material UI"),
        getTechByName("JavaScript"),
        getTechByName("HTML"),
        getTechByName("CSS"),
      ],
    },
    {
      title: "The Flower Collective 🪴",
      description:
        "Welcome to The Flower Collective's online store! We are a boutique flower shop that provides handcrafted, unique flower arrangements for all occasions. Our aim is to bring joy and beauty into people's lives through the art of floral design.",
      image: `${process.env.PUBLIC_URL}/projectImgs/flowercollectiveimg.png`,
      repo: "www.test.com",
      demo: "www.test.com",
      techStack: [
        getTechByName("JavaScript"),
        getTechByName("HTML"),
        getTechByName("CSS"),
      ],
    },
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="text-with-box">
          <div className="intro-text">Projects</div>
          <div className="coloured-box" style={{ width: "110%" }}></div>
        </div>

        {projects.map((project) => {
          return <ProjectCard key={project.title} projects={project} />;
        })}
      </div>
    </div>
  );
}
