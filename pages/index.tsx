import Head from "next/head";
import Layout from "@/components/Layout/layout";
import ChiffresCles from "@/components/ChiffresCles/chiffresCles";
import Presentation from "@/components/Presentation/presentation";
import ContactBanner from "@/components/ContactBanner/contactBanner";
import Slider from "@/components/Slider/slider";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Société MC Montage: Entreprise de rayonnage dans le Grand Est
        </title>
        <meta
          name="description"
          content="Société spécialisée dans le rayonnage industriel en Lorraine et Meurthe-et-Moselle. Installation de racks à palettes, rayonnages métalliques, solutions de stockage, rayonnages d’archives, cloisons, mezzanines, faux plafonds et étagères sur rails dans tout le Grand Est."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://mcmontage.fr/thumbnails/logoPhotoshop.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Société MC Montage, spécialisée dans le montage, démontage de rayonnage industriel, mezzanine, plateforme, pose de cloison et de faux plafond."
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:description"
          property="og:description"
          content="Société spécialisée dans le rayonnage industriel en Lorraine et Meurthe-et-Moselle. Installation de racks à palettes, rayonnages métalliques, solutions de stockage, rayonnages d’archives, cloisons, mezzanines, faux plafonds et étagères sur rails dans tout le Grand Est."
        />
        <meta name="og:url" property="og:url" content="https://mcmontage.fr" />
        <link rel="canonical" href="https://mcmontage.fr" />
        <meta
          name="keywords"
          content="rayonnage industriel, agencement bureau, mezzanine, plateforme, pose de cloison, rayonnage archive, grand est, Lorraine, Alsace, meurthe et moselle, 54, 57, 88, 55,67, 68, montage rayonnage, démontage rayonnage, installation rayonnage"
        />
      </Head>
      <Layout>
        <Presentation />
        <ChiffresCles />
        <Slider />
        <Faq />
        <ContactBanner />
      </Layout>
    </>
  );
}
