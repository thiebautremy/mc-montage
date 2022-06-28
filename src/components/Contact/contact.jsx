import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../Modal/modal";
import "./contact.scss";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5h5mqn9",
        "template_3mv0xzc",
        form.current,
        "iH8qeDu1HKlAzYYko"
      )
      .then(
        (res) => {
          console.log("success : ", res);
          if (res.status === 200) {
            setMessageModal("Message correctement envoyé");
            setIsVisibleModal(true);
            setMessage("");
            setEmail("");
          }
        },
        (err) => {
          console.log("error : ", err);
          setMessageModal("Problème lors de l'envoi du message");
          setIsVisibleModal(true);
        }
      );
  };

  return (
    <section className="contact">
      <h2>Nous contacter</h2>
      <div className="contact__formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre Email"
            />
          </div>
          {/* TODO Faire un select avec value object pour intégrer en tant qu'objet de mail */}
          {/* <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre Email"
            />
          </div> */}
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message"
            />
          </div>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      {isVisibleModal && (
        <Modal message={messageModal} action={() => setIsVisibleModal()} />
      )}
    </section>
  );
};

export default Contact;
