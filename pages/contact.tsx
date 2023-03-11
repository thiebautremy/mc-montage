import { useState, useRef } from "react";
import Layout from "@/components/Layout/layout";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.scss";
import Modal from "@/components/Modal/modal";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const Contact = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [demande, setDemande] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  //! TODO Check si l'id du template correspond bien au nouveau avec l'ajout de l'objet
  //! Bloquer l'envoi si pas d'objet choisis
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    form.current &&
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
              // setDemande("Choisissez une demande...");
            }
          },
          (err) => {
            setMessageModal("Problème lors de l'envoi du message");
            setIsVisibleModal(true);
          }
        );
  };
  return (
    <Layout>
      <div className={styles.contact}>
        <h2>Nous contacter</h2>
        <div className={styles.contact__infos}>
          <p className={styles.contact__infos__info}>
            <MdOutlineMarkEmailRead />
            <a
              href="mailto: mcmontage54450@gmail.com"
              className={styles.footer__container__mailEtNumero__mail}
            >
              mcmontage54450@gmail.com
            </a>
          </p>
          <p className={styles.contact__infos__info}>
            <MdPhoneInTalk /> 06 81 21 38 73
          </p>
          <p className={styles.contact__infos__info}>
            <BsClockHistory />
            Ouvert du lundi au vendredi de 07h30 à 20h
          </p>
        </div>
        <div className={styles.contact__formContainer}>
          <form ref={form} onSubmit={sendEmail}>
            {/* <div>
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
            </div> */}
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
          <Modal
            message={messageModal}
            action={() => setIsVisibleModal(false)}
          />
        )}
      </div>
    </Layout>
  );
};
export default Contact;
