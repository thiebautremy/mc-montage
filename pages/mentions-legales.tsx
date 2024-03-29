import NavBar from "@/components/NavBar/navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/MentionsLegales.module.scss";

const MentionsLegales = () => {
  const DynamicFooter = dynamic(
    () => import("@/components/Footer/footer.jsx"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Head>
        <title>Mc Montage - Mentions légales</title>
        <meta
          name="description"
          content="Consultez la page de mentions légales de MC Montage pour en savoir plus sur notre société et nos obligations légales. Retrouvez toutes les informations sur nos coordonnées, nos conditions d'utilisation et notre politique de confidentialité. Nous nous engageons à respecter les normes et les lois en vigueur pour garantir une relation de confiance avec nos clients. Contactez-nous si vous avez des questions supplémentaires."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://mcmontage.fr/thumbnails/logoPhotoshop.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Mentions légales de la société MC Montage."
        />
        <meta
          name="og:description"
          property="og:description"
          content="Consultez la page de mentions légales de MC Montage pour en savoir plus sur notre société et nos obligations légales. Retrouvez toutes les informations sur nos coordonnées, nos conditions d'utilisation et notre politique de confidentialité. Nous nous engageons à respecter les normes et les lois en vigueur pour garantir une relation de confiance avec nos clients. Contactez-nous si vous avez des questions supplémentaires."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://mcmontage.fr/mentions-legales"
        />
        <link rel="canonical" href="https://mcmontage.fr/mentions-legales" />
        <meta name="keywords" content="mentions légales" />
      </Head>
      <NavBar />
      <div className={styles.mentionsLegales}>
        <h1>Mentions légales</h1>
        <h2>1 - Édition du site</h2>
        <p>
          En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique, il est précisé aux
          utilisateurs du site internet https://mcmontage.fr l&apos;identité des
          différents intervenants dans le cadre de sa réalisation et de son
          suivi:
        </p>
        <p>
          Propriétaire du site : <strong>Mickael GERL</strong> - Contact :
          mcmontage54450@gmail.com 06 81 21 38 73 - Adresse : 16 Rue de
          Chenevières 54450 BENAMENIL.
        </p>
        <p>
          Identification de l&apos;entreprise : SARL Mickael GERL au capital
          social de 1000€ - SIREN : 503880783 - RCS ou RM : - Adresse postale :
          16 Rue de Chenevières 54450 BENAMENIL
        </p>
        <p>
          Directeur de la publication : THIEBAUT Rémy - remythiebaut52@gmail.com
        </p>
        <p>
          Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix
          Cedex 1 - Téléphone : 1007
        </p>
        <p>
          Délégué à la protection des données : THIEBAUT Rémy -
          remythiebaut52@gmail.com
        </p>
        <p>Webmaster : THIEBAUT Rémy</p>
        <h2> 2 - Propriété intellectuelle et contrefaçons.</h2>
        <p>
          Mickael GERL est propriétaire des droits de propriété intellectuelle
          et détient les droits d’usage sur tous les éléments accessibles sur le
          site internet, notamment les textes, images, graphismes, logos,
          vidéos, architecture, icônes et sons.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de Mickael GERL.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l’un quelconque des
          éléments qu’il contient sera considérée comme constitutive d’une
          contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>
        <h2>3 - Limitations de responsabilité.</h2>
        <p>
          Mickael GERL ne pourra être tenu pour responsable des dommages directs
          et indirects causés au matériel de l’utilisateur, lors de l’accès au
          site https://mcmontage.fr.
        </p>
        <p>
          Mickael GERL décline toute responsabilité quant à l’utilisation qui
          pourrait être faite des informations et contenus présents sur
          https://mcmontage.fr.
        </p>
        <p>
          Mickael GERL s’engage à sécuriser au mieux le site
          https://mcmontage.fr, cependant sa responsabilité ne pourra être mise
          en cause si des données indésirables sont importées et installées sur
          son site à son insu.
        </p>
        <p>
          Des espaces interactifs (espace contact ou commentaires) sont à la
          disposition des utilisateurs. Mickael GERL se réserve le droit de
          supprimer, sans mise en demeure préalable, tout contenu déposé dans
          cet espace qui contreviendrait à la législation applicable en France,
          en particulier aux dispositions relatives à la protection des données.
        </p>
        <p>
          Le cas échéant, Mickael GERL se réserve également la possibilité de
          mettre en cause la responsabilité civile et/ou pénale de
          l’utilisateur, notamment en cas de message à caractère raciste,
          injurieux, diffamant, ou pornographique, quel que soit le support
          utilisé (texte, photographie …).
        </p>
        <h2> 4 - CNIL et gestion des données personnelles.</h2>
        <p>
          Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
          modifiée, l’utilisateur du site https://mcmontage.fr dispose d’un
          droit d’accès, de modification et de suppression des informations
          collectées. Pour exercer ce droit, envoyez un message à notre Délégué
          à la Protection des Données : THIEBAUT Rémy -
          remythiebaut52@gmail.com.
        </p>
        <h2>5 - Liens hypertextes</h2>
        <p>
          Le site https://mcmontage.fr contient des liens hypertextes vers
          d’autres sites et dégage toute responsabilité à propos de ces liens
          externes ou des liens créés par d’autres sites vers
          https://mcmontage.fr.
        </p>
        {/* <p>
          La navigation sur le site https://mcmontage.fr est susceptible de
          provoquer l’installation de cookie(s) sur l’ordinateur de
          l’utilisateur.
        </p>
        <p>
          Un &quot;cookie&quot; est un fichier de petite taille qui enregistre
          des informations relatives à la navigation d’un utilisateur sur un
          site. Les données ainsi obtenues permettent d&apos;obtenir des mesures
          de fréquentation, par exemple.
        </p>
        <p>
          Vous avez la possibilité d’accepter ou de refuser les cookies en
          modifiant les paramètres de votre navigateur. Aucun cookie ne sera
          déposé sans votre consentement.
        </p>
        <p>Les cookies sont enregistrés pour une durée maximale de 1 mois.
        Pour plus d&apos;informations sur la façon dont nous faisons usage des
        cookies, lisez notre http://mcmontage.fr/politique-confidentialite.</p> */}
        <h2>6 - Droit applicable et attribution de juridiction.</h2>
        <p>
          {" "}
          Tout litige en relation avec l’utilisation du site
          https://mcmontage.fr est soumis au droit français. En dehors des cas
          où la loi ne le permet pas, il est fait attribution exclusive de
          juridiction aux tribunaux compétents de Nancy.
        </p>
      </div>
      <DynamicFooter />
    </>
  );
};

export default MentionsLegales;
