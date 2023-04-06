import styles from "../styles/Contact.module.scss";
import Head from "next/head";
import NavBar from "@/components/NavBar/navbar";
import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm/contactForm";

const Contact = () => {
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
        <meta
          name="description"
          content="Contactez MC Montage pour toutes vos demandes d'installation et de maintenance d'équipements industriels sur mesure. Notre équipe expérimentée est à votre disposition pour répondre à toutes vos demandes de renseignements et vous aider à trouver la meilleure solution pour votre entreprise. Contactez-nous dès maintenant pour une consultation personnalisée."
        />
        <meta
          name="og:image"
          property="og:image"
          content={require("../assets/images/logoPhotoshop.png")}
        />
        <meta
          name="og:description"
          property="og:description"
          content="Contactez MC Montage pour toutes vos demandes d'installation et de maintenance d'équipements industriels sur mesure. Notre équipe expérimentée est à votre disposition pour répondre à toutes vos demandes de renseignements et vous aider à trouver la meilleure solution pour votre entreprise. Contactez-nous dès maintenant pour une consultation personnalisée."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://mcmontage.fr/contact"
        />
        <link rel="canonical" href="https://mcmontage.fr/contact" />
        <meta
          name="keywords"
          content="contact, formulaire, email, telephone, adresse"
        />
      </Head>
      <NavBar />
      <div className={styles.contact}>
        <h1>Nous contacter</h1>
        <ContactForm />
      </div>
      <DynamicFooter />
    </>
  );
};
export default Contact;
