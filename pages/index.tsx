import Head from "next/head";
import Layout from "@/components/Layout/layout";
import ChiffresCles from "@/components/ChiffresCles/chiffresCles";
import Presentation from "@/components/Presentation/presentation";
import ContactBanner from "@/components/ContactBanner/contactBanner";
import logo from "../assets/images/logoPhotoshop.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mc Montage</title>
        <meta
          name="description"
          content="La société MC Montage est spécialisée dans le montage, démontage de rayonnage industriel dans le Grand Est. Nos équipes vous accompagnent dans des projets d'installation de rack à palettes, de rayonnage métallique, d'agencement de bureau, de stockage, de rayonnage d'archive, d'étagères sur rails, de pose de cloison, de mezzanine et de faux plafond. Nous assurons également un Service Après Vente."
        />
        <meta
          name="og:image"
          property="og:image"
          content="../assets/images/logoPhotoshop.png"
        ></meta>
      </Head>
      <Layout>
        <Presentation />
        <ChiffresCles />
        <ContactBanner />
      </Layout>
    </>
  );
}
