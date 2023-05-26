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
        <title>Société MC Montage</title>
        <meta
          name="description"
          content="Société spécialisée dans le rayonnage industriel dans le Grand Est. Pose de rack à palettes, rayonnage métallique, stockage, rayonnage d'archive, cloison, mezzanine, faux plafond et d'étagères sur rails."
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
          content="Société spécialisée dans le rayonnage industriel dans le Grand Est. Pose de rack à palettes, rayonnage métallique, stockage, rayonnage d'archive, cloison, mezzanine, faux plafond et d'étagères sur rails."
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
