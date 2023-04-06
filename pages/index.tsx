import Head from "next/head";
import Layout from "@/components/Layout/layout";
import ChiffresCles from "@/components/ChiffresCles/chiffresCles";
import Presentation from "@/components/Presentation/presentation";
import ContactBanner from "@/components/ContactBanner/contactBanner";
import Slider from "@/components/Slider/slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>MC Montage</title>
        <meta
          name="description"
          content="La société MC Montage est spécialisée dans le montage, démontage de rayonnage industriel dans le Grand Est. Nos équipes vous accompagnent dans des projets d'installation de rack à palettes, de rayonnage métallique, d'agencement de bureau, de stockage, de rayonnage d'archive, d'étagères sur rails, de pose de cloison, de mezzanine et de faux plafond. Nous assurons également un Service Après Vente."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://mcmontage.fr/thumbnails/logoPhotoshop.png"
        />
        <meta name="og:title" property="og:title" content="MC Montage" />
        <meta
          name="og:description"
          property="og:description"
          content="La société MC Montage est spécialisée dans le montage, démontage de rayonnage industriel dans le Grand Est. Nos équipes vous accompagnent dans des projets d'installation de rack à palettes, de rayonnage métallique, d'agencement de bureau, de stockage, de rayonnage d'archive, d'étagères sur rails, de pose de cloison, de mezzanine et de faux plafond. Nous assurons également un Service Après Vente."
        />
        <meta name="og:url" property="og:url" content="https://mcmontage.fr" />
        <link rel="canonical" href="https://mcmontage.fr" />
        <meta
          name="keywords"
          content="rayonnage industriel, agencement bureau, mezzanine, plateforme, pose de cloison, rayonnage archive"
        />
      </Head>
      <Layout>
        <Presentation />
        <ChiffresCles />
        <Slider />
        <ContactBanner />
      </Layout>
    </>
  );
}
