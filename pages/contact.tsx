import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.scss";
import Modal from "@/components/Modal/modal";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import Head from "next/head";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar/navbar";
import dynamic from "next/dynamic";

const emailJSPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
const emailJSPIdTemplate = process.env.NEXT_PUBLIC_EMAIL_ID_TEMPLATE as string;

const Contact = () => {
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
          "service_5h5mqn9",
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

  const DynamicFooter = dynamic(
    () => import("@/components/Footer/footer.jsx"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Head>
        <title>Mc Montage - Contact</title>
      </Head>
      <NavBar />
      <div className={styles.contact}>
        <h1>Nous contacter</h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.contact__infosAndform}>
            <div className={styles.contact__infos}>
              <p className={styles.contact__infos__info}>
                <MdOutlineMarkEmailRead />
                En envoyant un mail à :
                <a
                  href="mailto: mcmontage54450@gmail.com"
                  className={styles.contact__infos__info__mail}
                >
                  mcmontage54450@gmail.com
                </a>
              </p>
              <p className={styles.contact__infos__info}>
                <MdPhoneInTalk />
                Par téléphone au : 06 81 21 38 73
              </p>
              <p className={styles.contact__infos__info}>
                <BsClockHistory />
                Ouvert du lundi au vendredi de 07h30 à 20h
              </p>
            </div>
            <div className={styles.contact__formContainer}>
              <h2>Formulaire de contact</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div>
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
                <div>
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
      <DynamicFooter />
    </>
  );
};
export default Contact;
