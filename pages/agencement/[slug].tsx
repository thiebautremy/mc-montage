import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Feature.module.scss";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import {
  findUrlsAndCreateParams,
  urlWithFirstLetterCapitalize,
  findDataFromSlug,
  findFeatureIntroFromSlug,
} from "@/helper/helper";
import Feature from "@/components/Feature/feature";
import ContactBanner from "@/components/ContactBanner/contactBanner";
import parse from "html-react-parser";
import metaImage from "../../assets/images/plateforme-mezzanine.webp";
import Spacer from "@/components/Spacer/spacer";

const Agencement = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [featureIntro, setFeatureInto] = useState<
    { slug: string; title: string; description: string }[] | undefined
  >();
  const [featuresData, setFeaturesData] = useState<
    | {
        id: number;
        slug: string;
        text: string;
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
      }[]
    | undefined
  >();

  useEffect(() => {
    setFeaturesData(findDataFromSlug("agencement", slug));
    setFeatureInto(findFeatureIntroFromSlug("agencement", slug));
  }, [slug]);

  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
        <meta
          name="description"
          content="Découvrez les solutions d'agencement proposées par MC Montage pour votre entreprise : bureaux, mezzanines, plateformes, poses de cloisons et de faux plafonds. Maximisez votre espace de travail et créez un environnement confortable et fonctionnel pour votre personnel avec notre expertise en installation sur mesure."
        />
        <meta
          name="og:image"
          property="og:image"
          content="../../assets/images/plateforme-mezzanine.webp"
        />
        <meta
          name="keywords"
          content="agencement bureau, mezzanine, plateforme, pose de cloison, faux-plafond"
        />
      </Head>
      <Layout>
        <div className={styles.headerFeature}>
          <h1>
            {featureIntro
              ? featureIntro[0].title
              : urlWithFirstLetterCapitalize(slug)}
          </h1>
          <div className={styles.headerFeature__description}>
            {featureIntro && parse(featureIntro[0].description)}
          </div>
        </div>
        {featuresData?.map((feature) => (
          <Feature
            key={feature.id}
            text={feature.text}
            imgSrc={require(`../../assets/images/${feature.imgSrc}`)}
            imgAlt={feature.imgAlt}
            imgTitle={feature.imgTitle}
            isInverted={feature.id % 2 === 0}
          />
        ))}
        <Spacer height={"height"} />
        <ContactBanner />
      </Layout>
    </>
  );
};
export default Agencement;

export async function getStaticPaths() {
  const params = findUrlsAndCreateParams("agencement");
  return {
    paths: [...params],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: { post: {} },
  };
}
