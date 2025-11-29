export default function Resume() {
  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">RESUME</h4>
          <h2 className="st-section-heading-subtitle">RESUME</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          {/* Experience */}
          {/* <div className="col-lg-6">
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img src="/assets/img/icon/resume-icon1.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">Experience</h2>
              </div>

              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">Junior Software Engineer</h3>
                  <div className="st-resume-timeline-duration">Nov 2023 - Present</div>
                  <h4 className="st-resume-timeline-subtitle">Mediusware LTD, Dhaka Bangladesh</h4>
                  <div className="st-resume-timeline-text">
                    <p>As a Software Engineer at Mediusware, I lead social media automation and optimize
                      HR systems, specializing in Python, Django, and web development. I focus on
                      frontend responsiveness, API integration, and have developed an AI
                      language-learning app using the OpenAI API, enhancing user engagement and
                      streamlining workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Education */}
          {/* <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img src="/assets/img/icon/resume-icon2.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">Education</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">Bachelor of Computer Science</h3>
                  <div className="st-resume-timeline-duration">Nov 2019 - Aug 2023</div>
                  <h4 className="st-resume-timeline-subtitle">Central University of Science and Technology
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>During my university education in Computer Science & Engineering, I gained both
                      theoretical knowledge and practical skills in key areas like programming, data
                      structures, AI, and machine learning. This experience fostered my
                      problem-solving abilities, preparing me for a career in software development and
                      innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>

      <section className="work section" id="work">
        {/* PDF iframe */}
        {/* <iframe id="pdf" src="assets/img/Md_Ariful_Islam_Software_Engineer_Resume.pdf" width="55%" height="1050px" style={{ display: 'block', margin: 'auto', backgroundColor: '#0a0b1c' }}></iframe> */}

        {/* Google Doc iframe */}

        <div id="doc" style={{ textAlign: 'center' }}>

          <iframe src="https://docs.google.com/document/d/1GFk11ncuqnv1OQCx6Rcfvcnyshf8t1cF/preview"
            width="40%" height="1050px" style={{ display: 'block', margin: 'auto', backgroundColor: '#0a0b1c' }}></iframe>
          {/* <iframe src="https://drive.google.com/file/d/1YtYU5br4LAyJBIFkCzboazuPkouEwjlH/view"
                width="40%" height="1050px" style={{ display: 'block', margin: 'auto', backgroundColor: '#0a0b1c' }}></iframe> */}
        </div>

        <div className="st-text-block-btn mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="assets/img/Farhana_Islam_Front_End_Developer_Resume.pdf" className="st-btn st-style1 st-color1"
            download="Farhana_Islam_Front_End_Developer_Resume.pdf">Download Resume</a>
        </div>

      </section>

      <style jsx>{`
        @media only screen and (min-device-width: 10px) and (max-device-width: 1024px) {
            #doc {
                display: none;
            }
        }
    `}</style>
    </section>
  );
}