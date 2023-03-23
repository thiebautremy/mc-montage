import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import styles from "../../styles/Feature.module.scss";
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

const Services = () => {
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
    setFeaturesData(findDataFromSlug("services", slug));
    setFeatureInto(findFeatureIntroFromSlug("services", slug));
  }, [slug]);
  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
        <meta name="description" content="" />
        <meta
          name="og:image"
          property="og:image"
          content="../../assets/images/logoPhotoshop.png"
        />
        <meta name="keywords" content="services, après-vente, devis, SAV" />
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
        <ContactBanner />
      </Layout>
    </>
  );
};
export default Services;

export async function getStaticPaths() {
  const params = findUrlsAndCreateParams("services");
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
