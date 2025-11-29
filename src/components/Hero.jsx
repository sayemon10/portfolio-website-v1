
export default function Hero() {
  return (
    <section className="st-hero st-style2" id="home">
      <div className="container">
        <div className="st-hero-text">
          <h1>Hi, I am <span>Ariful Islam</span></h1>
          <p>I am a Software Engineer with expertise in <span className="blink">Python</span>, <span className="blink">Django</span>, and backend development. I specialize in
            building robust web applications, developing <span className="blink">APIs</span>, and integrating <span className="blink">large language models (LLMs).</span>
            <br />While I focus on backend engineering, I also ensure clean and responsive frontend designs to
            deliver comprehensive, full-stack solutions.
          </p>

          <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="st-social-link">
              <a href="https://www.linkedin.com/in/md-arif-rexa/" className="st-social-btn" target="_blank">
                <span className="st-social-icon"><i className="fab fa-linkedin"></i></span>
                <span className="st-icon-name">LinkedIn</span>
              </a>
              <a href="https://github.com/ArifRexa/" className="st-social-btn" target="_blank">
                <span className="st-social-icon"><i className="fab fa-github"></i></span>
                <span className="st-icon-name">Github</span>
              </a>
              <a href="https://x.com/MdArifReza3" className="st-social-btn" target="_blank">
                <span className="st-social-icon"><i className="fab fa-twitter"></i></span>
                <span className="st-icon-name">Twitter</span>
              </a>
              <a href="https://www.threads.net/@arif_rexa" className="st-social-btn active" target="_blank">
                <span className="st-social-icon"><i className="fa-brands fa-threads"></i></span>
                <span className="st-icon-name">Threads</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
      <div id="particles-js"></div>
      <style jsx>{`
        .blink {
          animation: blink 2.5s infinite;
        }

        @keyframes blink {
          0% {
            color: white;
          }
          33% {
            color: #fec544;
          }
          66% {
            color: red;
          }
          100% {
            color: white;
          }
        }
      `}</style>
    </section>
  );
}
