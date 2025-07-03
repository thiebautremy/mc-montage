import { useState, useRef } from "react";
import styles from "./contactForm.module.scss";
import emailjs from "@emailjs/browser";
import Modal from "@/components/Modal/modal";
import { motion } from "framer-motion";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const emailJSPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
const emailJSPIdTemplate = process.env.NEXT_PUBLIC_EMAIL_ID_TEMPLATE as string;

const ContactForm = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    form.current &&
      emailjs
        .sendForm(
          "remythiebaut52",
          emailJSPIdTemplate,
          form.current,
          emailJSPublicKey
        )
        .then(
          (res) => {
            if (res.status === 200) {
              setMessageModal("Message correctement envoyé");
              setIsVisibleModal(true);
              setMessage("");
              setEmail("");
            }
          },
          (err) => {
            setMessageModal("Problème lors de l'envoi du message");
            setIsVisibleModal(true);
          }
        );
  };

  return (
    <div className={styles.contactForm}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.contactForm__infosAndform}>
          <div className={styles.contactForm__infos}>
            <p className={styles.contactForm__infos__info}>
              <MdOutlineMarkEmailRead />
              En envoyant un mail à :
              <a
                href="mailto:mcmontage54450@gmail.com"
                className={styles.contactForm__infos__info__mail}
              >
                mcmontage54450@gmail.com
              </a>
            </p>
            <p className={styles.contactForm__infos__info}>
              <MdPhoneInTalk />
              Par téléphone au : 06 81 21 38 73
            </p>
            <p className={styles.contactForm__infos__info}>
              <BsClockHistory />
              Ouvert du lundi au vendredi de 07h30 à 20h
            </p>
          </div>
          <div className={styles.contactForm__formContainer}>
            <h2>Formulaire de contact</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.inputAndLabel}>
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  placeholder="Votre Email..."
                />
              </div>
              <div className={styles.inputAndLabel}>
                <label>Message</label>
                <textarea
                  name="message"
                  className={styles.input}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message..."
                />
              </div>
              <input
                type="submit"
                value="Envoyer"
                className={styles.submitBtn}
              />
            </form>
          </div>
        </div>
      </motion.div>
      <Modal
        message={messageModal}
        setMessageModal={setMessageModal}
        isVisibleModal={isVisibleModal}
        action={() => setIsVisibleModal(false)}
      />
    </div>
  );
};

export default ContactForm;
