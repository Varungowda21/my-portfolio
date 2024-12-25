"use client";

export default function Skills() {
  return (
    <>
      {" "}
      <section id="skills">
        <p className="tag_line">Explore My</p>
        <p className="Headings">Skills</p>
        <div className="skills_details_container">
          <div className="article_container">
            <div className="first">
              <div className="skill_logo">
                <div>
                  <img
                    src="./assests/html_logo.png"
                    alt="html icon"
                    className="skill_icon"
                  />
                </div>
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="skill_logo">
                <div>
                  <img
                    src="./assests/css_logo.png"
                    alt="css icon"
                    className="skill_icon"
                  />
                </div>
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="skill_logo">
                <div>
                  <img
                    src="./assests/javascript_logo.png"
                    alt="js icon"
                    className="skill_icon"
                  />
                </div>
                <div>
                  <h3>Javascript</h3>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="skill_logo">
                <div>
                  <img
                    src="./assests/react_logo_download.png"
                    alt="python icon"
                    className="skill_icon"
                  />
                </div>
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="skill_logo">
                <div>
                  <img
                    src="./assests/expressjs_logo.png"
                    alt="c icon"
                    className="skill_icon"
                  />
                </div>
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="skill_logo">
                <div>
                  <img
                    src="./assests/mongodb-logo-icon-thumbnail.png"
                    alt="java icon"
                    className="skill_icon"
                  />
                </div>
                <div>
                  <h3>Mongo db</h3>
                  <p>Bacics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
