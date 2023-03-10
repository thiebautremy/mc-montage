import Head from "next/head";
import Layout from "@/components/Layout/layout";
import ChiffresCles from "@/components/ChiffresCles/chiffresCles";
import Presentation from "@/components/Presentation/presentation";
import ContactBanner from "@/components/ContactBanner/contactBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mc Montage</title>
        <meta
          name="description"
          content="La société MC Montage est spécialisée dans le montage, démontage et rayonnage industriel dans le Grand Est.
      Fort d'une expérience de 14 ans, nos équipes vous accompagnent dans des projets d'installation de rack à palettes, de rayonnage métallique, d'agencement de bureau, de stockage, de rayonnage d'archive, d'étagères sur rails, de pose de cloison, de mezzanine et de faux plafond. Nous assurons également un Service Après Vente de qualité pour toutes nos réalisations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Presentation />
        <ChiffresCles />
        <ContactBanner />
      </Layout>
    </>
  );
}
