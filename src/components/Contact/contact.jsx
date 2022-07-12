import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../Modal/modal";
import "./contact.scss";
import VisibilitySensor from "react-visibility-sensor";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [demande, setDemande] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [visible, setIsVisible] = useState(false);
  //! TODO Check si l'id du template correspond bien au nouveau avec l'ajout de l'objet
  //! Bloquer l'envoi si pas d'objet choisis

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5h5mqn9",
        "template_6h1vw1m",
        form.current,
        "iH8qeDu1HKlAzYYko"
      )
      .then(
        (res) => {
          if (res.status === 200) {
            setMessageModal("Message correctement envoyé");
            setIsVisibleModal(true);
            setMessage("");
            setEmail("");
            setDemande("Choisissez une demande...");
          }
        },
        (err) => {
          setMessageModal("Problème lors de l'envoi du message");
          setIsVisibleModal(true);
        }
      );
  };
  return (
    <VisibilitySensor partialVisibility onChange={() => setIsVisible(!visible)}>
      <section className={visible ? "contact" : "contact visible"} id="contact">
        <h2>Nous contacter</h2>
        <div className="contact__formContainer">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="demande">Objet</label>
              <select
                name="demande"
                id="demande"
                onChange={(e) => setDemande(e.target.value)}
                value={demande}
              >
                <option value="Choisissez une demande...">
                  Choisissez une demande...
                </option>
                <option value="Demande d'informations">
                  Demande d'informations
                </option>
                <option value="Demande de devis">Demande de devis</option>
                <option value="S.A.V.">S.A.V.</option>
                <option value="Autres">Autres</option>
              </select>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre Email..."
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
              />
            </div>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
        {isVisibleModal && (
          <Modal message={messageModal} action={() => setIsVisibleModal()} />
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Contact;
