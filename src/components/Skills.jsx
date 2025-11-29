
export default function Skills() {
  return (
    <section className="st-dark-bg" id="skills">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">MY SKILLS</h4>
          <h2 className="st-section-heading-subtitle">MY SKILLS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="st-skill-wrap">
            <div className="st-skill-heading">
              {/* <h2 className="st-skill-title" style="text-align: center;">All the skills that I have in that field of work are mentioned.</h2> */}
            </div>
          </div>
          <div className="skills__container">
            <h2 style={{ textAlign: 'center' }}>All the skills that I have in that field
              of work are mentioned.</h2>
            <p className="skills__description">
              I am a Software Engineer with extensive experience in both frontend and backend development. I
              specialize in Python, Django, React, and Tailwind CSS, with a strong foundation in web
              automation
              and
              API integration.
            </p>

            {/* Languages Section */}
            <h3 className="skills__subtitle">Languages</h3>
            <div className="skills__grid">
              <div className="skills__card">
                <img src="/assets/img/python-svgrepo-com.svg" alt="Python" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Python</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__python"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/c-.png" alt="C++" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">C / C++</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__c"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/js-svgrepo-com.svg" alt="JavaScript" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">JavaScript</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__javascript"></div>
                </div>
              </div>
            </div>

            {/* Frameworks and Libraries Section */}
            <h3 className="skills__subtitle">Frameworks and Libraries</h3>
            <div className="skills__grid">
              <div className="skills__card">
                <img src="/assets/img/django-icon-svgrepo-com.svg" alt="Django" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Django</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__django"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/flask-svgrepo-com.svg" alt="Flask" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Flask</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__flask"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/api-settings-svgrepo-com.svg" alt="API" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Rest API</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__api"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/logo-teal.png" alt="Fast API" className="skills__icon" style={{width: "120px"}} />
                <h3 className="skills__name">Fast API</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__api"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/lc2.png" alt="Langchain" className="skills__icon" style={{width: "180px"}} />
                <h3 className="skills__name">Langchain</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__api"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/scrapy_nbg.png" alt="Scrapy" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Scrapy</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__flask"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/bs4.svg" alt="Beautiful Soup" className="skills__icon" style={{width: "100px"}} />
                <h3 className="skills__name">Beautiful Soup</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__flask"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/blacksheep.svg" alt="BlackSheep" className="skills__icon" style={{width: "60px"}} />
                <h3 className="skills__name">BlackSheep</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__flask"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/react-svgrepo-com.svg" alt="React" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">React.js</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__react"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/tailwind-svgrepo-com.svg" alt="Tailwind CSS" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Tailwind CSS</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__tailwind"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/bootstrapp.png" alt="Bootstrap CSS" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Bootstrap</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__tailwind"></div>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <h3 className="skills__subtitle">Tools</h3>
            <div className="skills__grid">
              <div className="skills__card">
                <img src="/assets/img/git-svgrepo-com.svg" alt="Git" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Git</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__git"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/postman-icon-svgrepo-com.svg" alt="Postman" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Postman</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__postman"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/docker-svgrepo-com.svg" alt="Docker" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Docker</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__postman"></div>
                </div>
              </div>
              <div className="skills__card">
                <img src="/assets/img/linux-svgrepo-com.svg" alt="Linux" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">Linux</h3>
                <div className="skills__bar">
                  <div className="skills__progress skills__linux"></div>
                </div>
              </div>
              <div className="skills__grid">
                <div className="skills__card">
                  <img src="/assets/img/selenium-svgrepo-com.svg" alt="Selenium" className="skills__icon" style={{width: "50px"}} />
                  <h3 className="skills__name">Selenium</h3>
                  <div className="skills__bar">
                    <div className="skills__progress skills__selenium"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases Section */}
            <h3 className="skills__subtitle">Databases</h3>
            <div className="skills__grid">
              <div className="skills__card">
                <img src="/assets/img/mongo-svgrepo-com.svg" alt="MongoDB" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">MongoDB</h3>
                {/* <div className="skills__bar">
                  <div className="skills__progress skills__mongo"></div>
                </div> */}
              </div>
              <div className="skills__card">
                <img src="/assets/img/mysql-logo-svgrepo-com.svg" alt="MySQL" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">MySQL</h3>
                {/* <div className="skills__bar">
                  <div className="skills__progress skills__mysql"></div>
                </div> */}
              </div>
              <div className="skills__card">
                <img src="/assets/img/sqlite-svgrepo-com.svg" alt="SQLite" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">SQLite</h3>
                {/* <div className="skills__bar">
                  <div className="skills__progress skills__sqlite"></div>
                </div> */}
              </div>
              <div className="skills__card">
                <img src="/assets/img/postgresql-svgrepo-com.svg" alt="PostgreSQL" className="skills__icon" style={{width: "50px"}} />
                <h3 className="skills__name">PostgreSQL</h3>
                {/* <div className="skills__bar">
                  <div className="skills__progress skills__postgresql"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
