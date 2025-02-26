import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioModal from "./PortfolioModal";

const IMG1 = `${process.env.PUBLIC_URL}/assets/portfolio1.jpg`;
const IMG2 = `${process.env.PUBLIC_URL}/assets/portfolio2.jpg`;
const IMG3 = `${process.env.PUBLIC_URL}/assets/portfolio3.jpg`;
const IMG4 = `${process.env.PUBLIC_URL}/assets/portfolio4.jpg`;
const IMG5 = `${process.env.PUBLIC_URL}/assets/portfolio5.jpg`;

export { IMG1, IMG2, IMG3, IMG4, IMG5 };


const projects = [
  {
    id: 1,
    name: "Crop Recommendation System",
    overview: "A machine learning-powered web app that predicts the best crop based on soil conditions.",
    features: ["Built a LightGBM-based crop recommendation model with 98% accuracy.",
      "Developed a Flask backend to process inputs and return predictions in real-time.",
      "Led the development of the backend and web interface, ensuring smooth data flow.",
      "Designed an intuitive web interface for users to input soil and climate data.",
      "Integrated EJS for dynamic rendering and ensured smooth backend-web interaction."
    ],
    techStack: ["Python", "LightGBM", "Flask", "REST API", "HTML", "CSS", "JavaScript"],
    image: IMG1,
    github: "https://github.com/rasheed-nadaf/Crop-Recommender-Website-using-ML",
  },
  {
    id: 2,
    name: "Gemini AI Clone App",
    overview: "A chatbot mimicking Gemini AI with OpenAI's NLP capabilities.",
    features: ["Built a conversational AI app replicating Google’s Gemini AI.",
      "Designed a chat interface with real-time responses and suggested questions.",
      "Added a collapsible sidebar for prompt history navigation.",
      "Integrated Google Generative AI API for intelligent responses."
    ],
    techStack: ["React", "JavaScript XML","Google Generative AI API", "Express.js", "CSS", "Git"],
    image: IMG2,
    github: "https://github.com/rasheed-nadaf/Gemini-Clone-App",
  },
  {
    id: 3,
    name: "To-Do List Application",
    overview: "A full-stack task management app with CRUD functionality, built using Express.js and PostgreSQL for efficient data handling and a responsive UI.",
    features: ["Built a full-stack task management app with CRUD operations.",
      "Integrated RESTful APIs using Express.js and PostgreSQL.",
      "Designed a responsive UI with HTML, CSS, and JavaScript.",
      "Ensured efficient database management for task tracking."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Express.js", "PostgreSQL", "REST API", "Git"],
    image: IMG3,
    github: "https://github.com/rasheed-nadaf/ToDo-list-app",
  },
  {
    id: 4,
    name: "Blog CRUD Application",
    overview: "A full-stack blog application that enables users to create, read, update, and delete (CRUD) blog posts with a clean and responsive interface.",
    features: ["Full CRUD functionality for seamless blog management.",
      "Express.js and PostgreSQL for efficient data storage and retrieval.",
      "Implements RESTful APIs with HTTP methods (POST, GET, PUT, DELETE) for seamless blog management.",
      "Responsive UI designed for a smooth user experience."
    ],
    techStack: ["HTML", "CSS", "Express.js", "PostgreSQL", "REST API"],
    image: IMG4,
    github: "https://github.com/rasheed-nadaf/Blog-CRUD-app",
  },
  {
    id: 5,
    name: "Feedback Application",
    overview: "A full-stack feedback app where users can submit feedback, which is stored in a PostgreSQL database and displayed dynamically. Built with React (Vite), Express.js, and PostgreSQL, and fully deployed on Vercel.",
    features: ["User-friendly feedback form with real-time display of submissions.",
      "RESTful API with POST /feedback (store feedback) and GET /feedback (retrieve feedback).",
      "Backend API powered by Express.js for handling user input and database operations.",
      "PostgreSQL database integration for efficient feedback storage.",
      "Responsive UI built with React (Vite) for a smooth user experience.",
    ],
    techStack: ["React", "CSS","JavaScript XML", "Express.js","PostgreSQL","REST API"],
    image: IMG5,
    github: "https://github.com/rasheed-nadaf/Feedback-Application",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling when closed
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.name} />
            </div>
            <h3>{project.name}</h3>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              <button className="btn btn-primary" onClick={() => openModal(project)}>Description</button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && <PortfolioModal isOpen={true} onClose={closeModal} project={selectedProject} />}
    </section>
  );
};

export default Portfolio;
