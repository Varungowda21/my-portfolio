export default function Contact() {
  return (
    <>
      <section id="contact">
        <p className="tag_line Text_contact">Get in touch</p>
        <h2 className="contact_title">Contact Me</h2>
        <div className="contact_info_outside_container">
          <div className="contact_info_container">
            <img
              src="./assests/email.png"
              alt="email"
              className="icon contact_icon mail_icon"
              id="gmail_icon"
            />
            <p>
              <a href="mailto:varun990069@gmail.com">varun990069@gmail.com</a>
            </p>
          </div>
          <div className="contact_info_container">
            <img
              src="./assests/linkedin-black.png"
              alt="email"
              className="icon contact_icon"
              id="linkedin_icon_white"
            />
            <a href="https://www.linkedin.com/in/varunk21">Linkedin</a>
          </div>
        </div>
      </section>
    </>
  );
}
