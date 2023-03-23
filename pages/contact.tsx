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
