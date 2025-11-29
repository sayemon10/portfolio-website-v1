
export default function Header() {
  return (
    <header className="st-site-header st-style2 st-sticky-header">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <div className="st-header-author">
                <img src="/assets/img/section/50626.jpg" alt="author" width={50} height={50} />
              </div>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav">
                  <li><a href="#home" className="st-smooth-move">Home</a></li>
                  <li><a href="#about" className="st-smooth-move">About</a></li>
                  <li><a href="#skills" className="st-smooth-move">Skills</a></li>
                  <li><a href="#projects" className="st-smooth-move">Projects</a></li>
                  <li><a href="#resume" className="st-smooth-move">Resume</a></li>
                  {/* <li><a href="#blog" className="st-smooth-move">Blog</a></li> */}
                  <li><a href="#contact" className="st-smooth-move">Contact</a></li>
                </ul>
                <div className="st-hero-btn">
                  <a href="#contact" className="st-btn st-style2 st-color1 st-btn-md st-smooth-move">Hire me</a>
                </div>
                <div className="st-hero-btn">
                  <a href="/assets/img/Md_Ariful_Islam_Software_Engineer_Resume.pdf" className="st-btn st-style2 st-color1 st-btn-md st-smooth-move" download="Md_Ariful_Islam_Software_Engineer_Resume.pdf">Have to change file Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
