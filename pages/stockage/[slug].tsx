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
import Spacer from "@/components/Spacer/spacer";

const Stockage = () => {
  const router = useRouter();

  const { slug } = router.query;
  const [featureIntro, setFeatureInto] = useState<
    { slug: string; title: string; description: string }[] | undefined
  >();
  const [featuresData, setFeaturesData] = useState<
    | {
        legend?: string;
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
    setFeaturesData(findDataFromSlug("stockage", slug));
    setFeatureInto(findFeatureIntroFromSlug("stockage", slug));
  }, [slug]);

  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
        <meta
          name="description"
          content={`Découvrez les solutions de stockage proposées par MC Montage pour optimiser votre espace de stockage : rayonnage mobile, cantilever, à palette, dynamique et grillagé. Maximisez la capacité de stockage et améliorez l'efficacité de votre entrepôt ou de votre espace de rangement grâce à notre expertise en installation sur mesure. En particulier : ${urlWithFirstLetterCapitalize(
            slug
          )}`}
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://mcmontage.fr/thumbnails/dynamique-palette.webp"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Société MC Montage, spécialisée dans le montage, démontage de rayonnage industriel, rayonnage cantilever, rack à palettes, rayonnage dynamique et grillagé."
        />
        <meta
          name="og:description"
          property="og:description"
          content={`Découvrez les solutions de stockage proposées par MC Montage pour optimiser votre espace de stockage : rayonnage mobile, cantilever, à palette, dynamique et grillagé. Maximisez la capacité de stockage et améliorez l'efficacité de votre entrepôt ou de votre espace de rangement grâce à notre expertise en installation sur mesure. En particulier : ${urlWithFirstLetterCapitalize(
            slug
          )}`}
        />
        <meta
          name="og:url"
          property="og:url"
          content={`https://mcmontage.fr/stockage/${slug}`}
        />
        <link rel="canonical" href={`https://mcmontage.fr/stockage/${slug}`} />
        <meta
          name="keywords"
          content="stockage, rayonnage mobile archive, rayonnage cantilever, rayonnage métallique industriel, rayonnage palette, rayonnage tablette"
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
            <p>{featureIntro && parse(featureIntro[0].description)}</p>
          </div>
        </div>
        {featuresData?.map((feature) => (
          <Feature
            key={feature.id}
            text={feature.text}
            legend={feature.legend}
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
