'use client';
import { useState } from 'react';

const projects = [
    {
        name: "AI Chatbot",
        description_short: "An intelligent chatbot powered by natural language processing...",
        description_full: "An intelligent chatbot powered by natural language processing, capable of understanding and responding to user queries in real-time.",
        images: [
            "/project_images/surrat/Screenshot 2024-10-09 003122.png",
            "/project_images/surrat/Screenshot 2024-10-09 003130.png",
            "/project_images/surrat/Screenshot 2024-10-09 003138.png",
            "/project_images/surrat/Screenshot 2024-10-09 003149.png",
            "/project_images/surrat/Screenshot 2024-10-09 003157.png",
            "/project_images/surrat/Screenshot 2024-10-09 003207.png",
            "/project_images/surrat/Screenshot 2024-10-09 003213.png",
            "/project_images/surrat/Screenshot 2024-10-09 003220.png",
            "/project_images/surrat/Screenshot 2024-10-09 003226.png",
            "/project_images/surrat/Screenshot 2024-10-09 003231.png",
            "/project_images/surrat/Screenshot 2024-10-09 003240.png",
            "/project_images/surrat/Screenshot 2024-10-09 003245.png",
            "/project_images/surrat/Screenshot 2024-10-09 003252.png",
            "/project_images/surrat/Screenshot 2024-10-09 003259.png",
            "/project_images/surrat/Screenshot 2024-10-09 003305.png",
            "/project_images/surrat/Screenshot 2024-10-09 003314.png",
            "/project_images/surrat/Screenshot 2024-10-09 003320.png",
            "/project_images/surrat/Screenshot 2024-10-09 003327.png",
            "/project_images/surrat/Screenshot 2024-10-09 003335.png",
            "/project_images/surrat/Screenshot 2024-10-09 003341.png",
            "/project_images/surrat/Screenshot 2024-10-09 003347.png",
            "/project_images/surrat/Screenshot 2024-10-09 003354.png",
            "/project_images/surrat/Screenshot 2024-10-09 003401.png",
            "/project_images/surrat/Screenshot 2024-10-09 003409.png",
            "/project_images/surrat/Screenshot 2024-10-09 003414.png",
            "/project_images/surrat/Screenshot 2024-10-09 003421.png",
            "/project_images/surrat/Screenshot 2024-10-09 003433.png",
            "/project_images/surrat/Screenshot 2024-10-09 003440.png",
            "/project_images/surrat/Screenshot_20241009_232252_com.systemintegration.jpg",
            "/project_images/surrat/Screenshot_20241009_232327_com.systemintegration.jpg",
            "/project_images/surrat/Screenshot_20241009_232345_com.systemintegration.jpg",
            "/project_images/surrat/Screenshot_20241009_232402_com.systemintegration.jpg",
            "/project_images/surrat/Screenshot_20241009_232439_com.systemintegration.jpg"
        ],
        technologies: [
            { name: "django", icon: "/assets/img/django-icon-svgrepo-com.svg", width: "25px" },
            { name: "Rest API", icon: "/assets/img/api-settings-svgrepo-com.svg", width: "35px" },
            { name: "OpenAI", icon: "/assets/img/openai-svgrepo-com.svg", width: "20px" },
            { name: "Huggingface", icon: "/assets/img/huggingface.png", width: "30px" },
            { name: "PostgreSQL", icon: "/assets/img/postgresql-svgrepo-com.svg", width: "30px" },
        ],
        github: "https://github.com/ArifRexa/Surrat-AI-Chat-Bot",
        live_demo: null
    },
    {
        name: "Social Media Automation",
        description_short: "I developed automated solutions for user interactions...",
        description_full: "I developed automated solutions for user interactions across platforms like Facebook, Instagram, and LinkedIn using Python, Selenium, and BeautifulSoup. This included secure session management and streamlined content distribution, enhancing engagement and operational efficiency.",
        images: [
            "/project_images/mojo/Screenshot 2024-10-09 002145.png",
            "/project_images/mojo/Screenshot 2024-10-09 002210.png",
            "/project_images/mojo/Screenshot 2024-10-09 002230.png",
            "/project_images/mojo/Screenshot 2024-10-09 002302.png",
            "/project_images/mojo/Screenshot 2024-10-09 002337.png",
            "/project_images/mojo/Screenshot 2024-10-09 002406.png",
            "/project_images/mojo/Screenshot 2024-10-09 002415.png",
            "/project_images/mojo/Screenshot 2024-10-09 002633.png",
            "/project_images/mojo/Screenshot 2024-10-09 002642.png",
            "/project_images/mojo/Screenshot 2024-10-09 002701.png",
            "/project_images/mojo/Screenshot 2024-10-09 002723.png",
            "/project_images/mojo/Screenshot 2024-10-09 002734.png",
            "/project_images/mojo/Screenshot 2024-10-09 002746.png",
            "/project_images/mojo/Screenshot 2024-10-09 002834.png",
            "/project_images/mojo/Screenshot 2024-10-09 002843.png",
            "/project_images/mojo/Screenshot 2024-10-09 002850.png",
            "/project_images/mojo/Screenshot 2024-10-09 002901.png",
            "/project_images/mojo/Screenshot 2024-10-09 002912.png",
        ],
        technologies: [
            { name: "Python", icon: "/assets/img/python-svgrepo-com.svg", width: "25px" },
            { name: "Blacksheep", icon: "/assets/img/blacksheep.svg", width: "35px" },
            { name: "Selenium", icon: "/assets/img/selenium-svgrepo-com.svg", width: "25px" },
            { name: "PostgreSQL", icon: "/assets/img/postgresql-svgrepo-com.svg", width: "30px" },
            { name: "Docker", icon: "/assets/img/docker-svgrepo-com.svg", width: "30px" },
        ],
        github: "https://github.com/ArifRexa/Social-Media-Automation/tree/main",
        live_demo: null
    },
    {
        name: "HR Management",
        description_short: "A key project involved developing a comprehensive Django-based...",
        description_full: "A key project involved developing a comprehensive Django-based admin panel tailored for managing employee data and workflows. This included integrating daily work updates and creating an API to streamline interview scheduling processes. To ensure a seamless and engaging user experience, I optimized frontend responsiveness using CSS media queries and JavaScript for dynamic content rendering.",
        images: [
            "/project_images/hr/Screenshot 2024-10-21 222403.png",
            "/project_images/hr/Screenshot 2024-10-21 222539.png",
            "/project_images/hr/Screenshot 2024-10-21 222558.png",
            "/project_images/hr/Screenshot 2024-10-20 121750.png",
            "/project_images/hr/Screenshot 2024-10-20 121854.png",
            "/project_images/hr/Screenshot 2024-10-20 121931.png",
        ],
        technologies: [
            { name: "Python", icon: "/assets/img/python-svgrepo-com.svg", width: "25px" },
            { name: "django", icon: "/assets/img/django-icon-svgrepo-com.svg", width: "25px" },
            { name: "MySql", icon: "/assets/img/mysql-logo-svgrepo-com.svg", width: "45px" },
        ],
        github: "https://github.com/ArifRexa/HR-Management-System",
        live_demo: null
    },
    {
        name: "ATS",
        description_short: "This ATS (Applicant Tracking System) simplifies the resume ...",
        description_full: "This ATS (Applicant Tracking System) simplifies the resume screening process by integrating Google Gemini AI with a user-friendly Streamlit interface. It processes uploaded resumes in PDF format, evaluates them against job descriptions, and provides comprehensive feedback. The system highlights key strengths, identifies gaps, and calculates a percentage match to determine alignment with the role, helping users enhance their resumes effectively.",
        images: [
            "/project_images/ATS/Screenshot 2024-10-20 124421.png",
            "/project_images/ATS/Screenshot 2024-10-20 125025.png",
            "/project_images/ATS/screencapture-localhost-8501-2024-10-20-12_53_490.png",
            "/project_images/ATS/Screenshot 2024-10-20 130941.png"
        ],
        technologies: [
            { name: "Python", icon: "/assets/img/python-svgrepo-com.svg", width: "25px" },
            { name: "django", icon: "/assets/img/django-icon-svgrepo-com.svg", width: "25px" },
            { name: "OpenAI", icon: "/assets/img/openai-svgrepo-com.svg", width: "20px" },
            { name: "Streamlit", icon: "/assets/img/streamlit-logo-primary-colormark-darktext.svg", width: "120px" },
        ],
        github: "https://github.com/ArifRexa/Application-Tracking-System-ATS",
        live_demo: "https://application-tracking-system-ats-qevhvhhxlvsjvrmfduuxx9.streamlit.app/"
    }
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
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className={`project-description ${expanded[index] ? 'expand' : ''}`}>
                  <span className="short-text" style={{ display: expanded[index] ? 'none' : 'inline' }}>{project.description_short}</span>
                  <span className="full-text" style={{ display: expanded[index] ? 'inline' : 'none' }}>{project.description_full}</span>
                  <a href="#" className="see-more" onClick={(e) => { e.preventDefault(); toggleDescription(index); }}>{expanded[index] ? 'See Less' : 'See More'}</a>
                </p>
                <div className="technologies mb-2 flex ">
                  {project.technologies.map((tech, i) => (
                    <img key={i} src={tech.icon} alt={tech.name} title={tech.name} style={{width: tech.width}} />
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
    </section>
  );
}