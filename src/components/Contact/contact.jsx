import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "remythiebaut52",
        "template_5l4gntd",
        form.current,
        "user_e37X1TZx4KUvyGw0yyEKV"
      )
      .then(
        (result) => {
          console.log("success : ", result.text);
        },
        (error) => {
          console.log("error : ", error.text);
        }
      );
  };

  return (
    <section className="contact">
      <h2>Nous contacter</h2>
      <div className="contact__formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Nom</label>
            <input type="text" name="user_name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
