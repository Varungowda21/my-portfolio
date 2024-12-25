"use client";

export default function About() {
  return (
    <>
      <section id="about">
        <p className="tag_line">Get To Know More</p>
        <p className="Headings">About me</p>
        <div className="about_container_outside">
          <div className="profile_about_pic_container about_less">
            <img src="./assests/above.png" alt="about-pic" className="about-pic" />
          </div>
          <div className="about_detail_container">
            <div className="about_container">
              <div className="details_container">
                <img
                  src="./assests/education-black.png"
                  alt="certifications"
                  height="30rem"
                  id="edhhu"
                />
                <h3>Educations</h3>
                <ul>
                  <p>PES College Mandya(BE in Electronics)</p>
                </ul>
              </div>
              <div className="details_container">
                <img
                  src="./assests/certi-black.png"
                  alt="certifications"
                  height="30rem"
                  className="less-opacity"
                  id="certii"
                />
                <h3>Certifications</h3>
                <p>MERN stack DCT and python course(udemy)</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello, i am varun i completed my graduation in 2024 from PES
                college of engineering mandya with overall cgpa of 7.7 along
                with my degree, i am skilled in javascript,react,node,express,mongodb with this skillset 
                i created two major project,one is skillboost(subscription based
                online learning platform) and another one is microblog app(an
                app for creating and posting the blogs).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
