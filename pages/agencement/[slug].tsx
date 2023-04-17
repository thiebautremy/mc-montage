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

type SlugType = {
  introData: [{ title: string; description: string }];
  featuresData: {
    legend?: string;
    id: number;
    slug: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    imgTitle: string;
  }[];
};

const Agencement: React.FC<SlugType> = ({ introData, featuresData }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [intro, setIntro] =
    useState<[{ title: string; description: string }]>();
  const [features, setFeatures] = useState<
    | {
        id: number;
        slug: string;
        text: string;
        legend?: string;
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
      }[]
    | undefined
  >();

  useEffect(() => {
    setIntro(introData);
    setFeatures(featuresData);
  }, [featuresData, introData]);
  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
        <meta
          name="og:title"
          property="og:title"
          content={`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}
        />
        <meta
          name="description"
          content={`Découvrez les solutions d'agencement proposées par MC Montage pour votre entreprise : bureaux, mezzanines, plateformes, poses de cloisons et de faux plafonds. Maximisez votre espace de travail et créez un environnement confortable et fonctionnel pour votre personnel avec notre expertise en installation sur mesure. En particulier : ${urlWithFirstLetterCapitalize(
            slug
          )}`}
        />
        <meta
          name="og:title"
          property="og:title"
          content="Société MC Montage, spécialisée dans le montage, démontage de mezzanines, plateformes. Ainsi que la pose de cloisons et de faux plafonds et l'agencement de bureau."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://mcmontage.fr/thumbnails/plateforme-mezzanine.webp"
        />
        <meta
          name="og:description"
          property="og:description"
          content={`Découvrez les solutions d'agencement proposées par MC Montage pour votre entreprise : bureaux, mezzanines, plateformes, poses de cloisons et de faux plafonds. Maximisez votre espace de travail et créez un environnement confortable et fonctionnel pour votre personnel avec notre expertise en installation sur mesure. En particulier : ${urlWithFirstLetterCapitalize(
            slug
          )}`}
        />
        <meta
          name="og:url"
          property="og:url"
          content={`https://mcmontage.fr/agencement/${slug}`}
        />
        <link
          rel="canonical"
          href={`https://mcmontage.fr/agencement/${slug}`}
        />
        <meta
          name="keywords"
          content="agencement bureau, mezzanine, plateforme, pose de cloison, faux-plafond"
        />
      </Head>
      <Layout>
        <div className={styles.headerFeature}>
          <h1>{intro ? intro[0].title : urlWithFirstLetterCapitalize(slug)}</h1>
          <div className={styles.headerFeature__description}>
            <p>{intro && parse(intro[0].description)}</p>
          </div>
        </div>
        {features?.map((feature) => (
          <Feature
            key={feature.id}
            text={feature.text}
            legend={feature.legend}
            imgSrc={require(`../../assets/images/${feature.imgSrc}`)}
            imgAlt={feature.imgAlt}
            imgTitle={feature.imgTitle}
            isInverted={feature.id % 2 === 0}
            id={0}
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

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  const introData = findFeatureIntroFromSlug("agencement", slug);
  const featuresData = findDataFromSlug("agencement", slug);
  return {
    props: { introData, featuresData },
  };
}
