'use client';
import { useState } from 'react';

const projects = [
    {
        name: "Food Cycle",
        description_short: "A comprehensive food-sharing platform that creates...",
        description_full: "A comprehensive food-sharing platform that creates a community driven solution. Real-time food listing with search and filtering capabilities.Complete user authentication flow with email/password and Google OAuth with admin control management.",
        images: [
            "/project_images/food-cycle/food-cycle-thumbnail-1.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003130.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003138.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003149.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003157.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003207.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003213.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003220.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003226.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003231.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003240.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003245.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003252.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003259.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003305.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003314.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003320.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003327.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003335.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003341.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003347.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003354.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003401.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003409.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003414.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003421.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003433.png",
            // "/project_images/surrat/Screenshot 2024-10-09 003440.png",
            // "/project_images/surrat/Screenshot_20241009_232252_com.systemintegration.jpg",
            // "/project_images/surrat/Screenshot_20241009_232327_com.systemintegration.jpg",
            // "/project_images/surrat/Screenshot_20241009_232345_com.systemintegration.jpg",
            // "/project_images/surrat/Screenshot_20241009_232402_com.systemintegration.jpg",
            // "/project_images/surrat/Screenshot_20241009_232439_com.systemintegration.jpg"
        ],
        technologies: [
            { name: "React", icon: "/assets/img/react-svgrepo-com.svg", width: "25px" },
            { name: "Rest API", icon: "/assets/img/api-settings-svgrepo-com.svg", width: "35px" },
            { name: "Node", icon: "/assets/img/nodejs.png", width: "25px", height: "25px" },
            { name: "Express", icon: "/assets/img/expressjs.png", width: "25px", height: "25px" },
            { name: "MongoDB", icon: "/assets/img/mongo-svgrepo-com.svg", width: "30px" },
            { name: "Firebase", icon: "/assets/img/firebase.png", width: "20px", height: "25px" },
        ],
        category: "Full-Stack", // Optional category badge
        github: "https://github.com/farhanarexa/Food-Cycle-Frontend",
        live_demo: "https://food-cycle.netlify.app"
    },
    {
        name: "Green Nest",
        description_short: "A comprehensive React-based e-commerce platform designed...",
        description_full: "A comprehensive React-based e-commerce platform designed for indoor plant enthusiasts. The application features a complete user authentication system with Firebase, allowing users to register, login, and manage their profiles. The platform offers advanced filtering and sorting capabilities, detailed plant information pages, and a booking system for purchases.",
        images: [
            "/project_images/green-nest.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002210.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002230.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002302.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002337.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002406.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002415.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002633.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002642.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002701.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002723.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002734.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002746.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002834.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002843.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002850.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002901.png",
            // "/project_images/mojo/Screenshot 2024-10-09 002912.png",
        ],
        technologies: [
            { name: "React", icon: "/assets/img/react-svgrepo-com.svg", width: "25px" },
            { name: "Firebase", icon: "/assets/img/firebase.png", width: "20px", height: "25px" },
            { name: "JSON", icon: "/assets/img/json.png", width: "30px" },

        ],
        github: "https://github.com/farhanarexa/green-nest",
        live_demo: "https://green-nest-plants.netlify.app/"
    },
    {
        name: "Local Service Hub",
        description_short: "A comprehensive service marketplace platform that...",
        description_full: "A comprehensive service marketplace platform that connects service providers with customers in local communities. Built with Next.js and Supabase, and provides an intuitive interface for discovering, booking, and reviewing local services. The platform features a modern UI with card-based layouts, and intuitive navigation, making it easy for users to connect with trusted local professionals for all their service needs.",
        images: [
            "/project_images/hero2.webp",
            // "/project_images/hr/Screenshot 2024-10-21 222539.png",
            // "/project_images/hr/Screenshot 2024-10-21 222558.png",
            // "/project_images/hr/Screenshot 2024-10-20 121750.png",
            // "/project_images/hr/Screenshot 2024-10-20 121854.png",
            // "/project_images/hr/Screenshot 2024-10-20 121931.png",
        ],
        technologies: [
            { name: "Next", icon: "/assets/img/nextjs-icon2.png", width: "25px" },
            { name: "Supabase", icon: "/assets/img/supabase-logo.png", width: "25px", height: "25px" },
            { name: "Rest API", icon: "/assets/img/api-settings-svgrepo-com.svg", width: "35px" },
        ],
        github: "https://github.com/ArifRexa/HR-Management-System",
        live_demo: "https://localservice-hub.netlify.app/",
        category: "Serverless", // Optional category badge
    },
];

export default function Projects() {
  const [expanded, setExpanded] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleDescription = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const openModal = (projectIndex) => {
    setCurrentProject(projectIndex);
    setCurrentImage(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeImage = (n) => {
    setCurrentImage(prev => {
      const projectImages = projects[currentProject].images;
      let newIndex = prev + n;
      if (newIndex >= projectImages.length) newIndex = 0;
      if (newIndex < 0) newIndex = projectImages.length - 1;
      return newIndex;
    });
  };

  return (
    <section className="st-dark-bg" id="projects">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Projects</h4>
          <h2 className="st-section-heading-subtitle">Projects</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container" onClick={() => openModal(index)}>
                <img src={project.images[0]} alt={project.name} className="project-image" />
                {project.category && (
                  <div className={`project-badge ${project.category.toLowerCase().replace(' ', '-')}`}>
                    {project.category}
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className={`project-description ${expanded[index] ? 'expand' : ''}`}>
                  <span className="short-text" style={{ display: expanded[index] ? 'none' : 'inline' }}>{project.description_short}</span>
                  <span className="full-text" style={{ display: expanded[index] ? 'inline' : 'none' }}>{project.description_full}</span>
                  <a href="#" className="see-more" onClick={(e) => { e.preventDefault(); toggleDescription(index); }}>{expanded[index] ? 'See Less' : 'See More'}</a>
                </p>
                <div className="technologies mb-2 flex align-items-center">
                  {project.technologies.map((tech, i) => (
                    <img key={i} src={tech.icon} alt={tech.name} title={tech.name} style={{width: tech.width, height: tech?.height}} />
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="github-link" target="_blank">GitHub</a>
                  <a href={project.live_demo} className={`demo-link btn ${!project.live_demo ? 'disabled' : ''}`} target={project.live_demo ? '_blank' : '_self'}>Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div id="imageModal" className="modal" style={{display: 'block'}}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img id="modalImage" className="modal-image" src={projects[currentProject].images[currentImage]} alt="Project Image" />
            <a className="prev" onClick={() => changeImage(-1)}>&#10094;</a>
            <a className="next" onClick={() => changeImage(1)}>&#10095;</a>
          </div>
        </div>
      )}
      <style jsx>{`
        .project-image-container {
          position: relative;
        }

        .project-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          z-index: 2;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .full-stack {
          background-color: rgba(74, 222, 128, 0.25);
          color: #94f364;
          border: 1px solid rgba(74, 222, 128, 0.4);
        }

        .serverless {
          background-color: rgba(96, 165, 250, 0.25);
          color: #81b2ff;
          border: 1px solid rgba(96, 165, 250, 0.4);
        }

        .frontend {
          background-color: rgba(251, 191, 36, 0.25);
          color: #fcd34d;
          border: 1px solid rgba(251, 191, 36, 0.4);
        }

        .backend {
          background-color: rgba(244, 114, 182, 0.25);
          color: #f687b3;
          border: 1px solid rgba(244, 114, 182, 0.4);
        }
      `}</style>
    </section>
  );
}