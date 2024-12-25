"use client";

const Profile = () => (
  <section id="profile">
    <div className="profile_about_pic_container">
      <img src="/assests/varu_osm.png" alt="Varun profile pic" />
    </div>
    <div className="section_text">
      <p className="section_text_p1">Hello, I'm</p>
      <h2 className="title">Varun Gowda.K</h2>
      <p className="section_text_p2">MERN stack Developer</p>
      <div className="btn-container">
        <button
          className="btn btn_color_1"
          onClick={() => window.open("/assests/varun_1.pdf")}
        >
          Download CV
        </button>
        <button
          className="btn btn_color_2"
          onClick={() => (location.href = "#contact")}
        >
          Contact Info
        </button>
      </div>
      <div id="social_container">
        <img
          src="/assests/linkedin-black.png"
          alt="LinkedIn"
          className="icon"
          onClick={() => (location.href = "https://www.linkedin.com/in/varunk21")}
        />
        <img
          src="/assests/github-black.png"
          alt="GitHub"
          className="icon"
          onClick={() => (location.href = "https://github.com/Varungowda21")}
        />
      </div>
    </div>
  </section>
);

export default Profile;
