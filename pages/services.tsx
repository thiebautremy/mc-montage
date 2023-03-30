import Layout from "@/components/Layout/layout";
import styles from "../styles/Services.module.scss";
import Head from "next/head";
import ContactBanner from "@/components/ContactBanner/contactBanner";

const Services = () => {
  return (
    <>
      <Head>
        <title>Mc Montage - Services</title>
        <meta
          name="description"
          content="Découvrez les services proposés par MC Montage pour l'installation de vos équipements : montage, démontage, devis, service après-vente et vente de matériel selon stock. Bénéficiez de notre expertise pour l'installation et l'entretien de vos équipements sur mesure. Nous sommes à votre disposition pour répondre à toutes vos demandes. "
        />
        <meta
          name="og:image"
          property="og:image"
          content="../../assets/images/logoPhotoshop.png"
        />
        <meta name="keywords" content="services, après-vente, devis, SAV" />
      </Head>
      <Layout>
        <div className={styles.services}>
          <h1>Nos services :</h1>
          <p className={styles.description}>
            Nous sommes fiers de proposer{" "}
            <span className="fontColorRed">un service complet</span> à nos
            clients, allant de la conception à la réalisation de leur projet.
            Nos équipes expérimentées travaillent avec nos clients pour
            comprendre leurs besoins et concevoir des solutions de stockage sur
            mesure pour répondre à leurs exigences. Nous sommes fiers de notre
            savoir-faire et de notre engagement envers nos clients. Nous avons
            une expérience éprouvée dans la réalisation de projets de stockage
            pour les secteurs industriels, logistiques, commerciaux et autres.
            Nous sommes confiants que nous pouvons aider nos clients à trouver
            la meilleure solution pour leur projet de stockage. Pour en savoir
            plus sur nos services de pose de rayonnage industriel, de plateforme
            mezzanine, de montage et de démontage, de SAV et de devis,
            n&apos;hésitez pas à nous contacter. Nos équipes se feront un
            plaisir de répondre à toutes vos questions et de vous aider à
            réaliser votre projet de stockage.
          </p>
          <h2 className={styles.h2}>Montage / Démontage</h2>
          <p className={styles.subDescription}>
            Pour installer un rayonnage industriel, il est généralement
            recommandé de faire appel à des professionnels pour garantir une
            installation de qualité en toute sécurité. Les équipes de montage et
            de démontage sont équipées d&apos;outils et de matériel de
            manutention tels que des chariots élévateurs, des transpalettes, des
            échelles, des protections anti-chute et des sabots.
          </p>
          <h2 className={styles.h2}>Devis</h2>
          <p className={styles.subDescription}>
            Nous proposons également des{" "}
            <span className="fontColorRed">devis gratuits</span> pour nos
            clients, afin qu&apos;ils puissent avoir une idée claire des coûts
            associés à leur projet. Possibilité également de vente de matériels
            d’occasions dans la limites des stocks disponibles.
          </p>
          <h2 className={styles.h2}>Service après vente</h2>
          <p className={styles.subDescription}>
            Nous sommes conscients qu&apos;il est important pour nos clients
            d&apos;avoir un partenaire de confiance pour leurs projets de
            stockage et d&apos;agencement. C&apos;est pourquoi nous offrons un
            service après-vente de qualité pour garantir la satisfaction de nos
            clients.
          </p>
        </div>
        <ContactBanner />
      </Layout>
    </>
  );
};
export default Services;
