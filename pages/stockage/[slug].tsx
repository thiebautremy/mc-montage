import { SetStateAction, useEffect, useState } from "react";
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

const Stockage = () => {
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
  const [featureIntro, setFeatureInto] = useState<
    { slug: string; title: string; description: string }[] | undefined
  >();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setFeaturesData(findDataFromSlug("stockage", slug));
    setFeatureInto(findFeatureIntroFromSlug("stockage", slug));
  }, [slug]);

  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
      </Head>
      <Layout>
        <div className={styles.headerFeature}>
          <h1>
            {featureIntro
              ? featureIntro[0].title
              : urlWithFirstLetterCapitalize(slug)}
          </h1>
          <p className={styles.headerFeature__description}>
            {featureIntro && parse(featureIntro[0].description)}
          </p>
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
export default Stockage;

export async function getStaticPaths() {
  const params = findUrlsAndCreateParams("stockage");
  return {
    paths: [...params],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
