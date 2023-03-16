import Link from "next/link";
import Head from "next/head";
import styles from "../styles/FourOhFour.module.scss";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Mc Montage - Page non trouvée</title>
      </Head>
      <div className={styles.fourOhFour}>
        <h1>Page non trouvée</h1>
        <h2>Il semblerait que vous soyez perdu, laissez moi vous aider :</h2>
        <Link href="/">
          <button className={styles.goBackBtn}>Retour à l&apos;accueil</button>
        </Link>
      </div>
    </>
  );
}
