import Link from "next/link";
import Head from "next/head";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Mc Montage - Page non trouvée</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <button>Go back home</button>
      </Link>
    </>
  );
}
