import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import {
  findUrlsAndCreateParams,
  urlWithFirstLetterCapitalize,
  findDataFromSlug,
} from "@/helper/helper";
import Feature from "@/components/Feature/feature";

const Stockage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const featuresData = findDataFromSlug("stockage", slug);
  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
      </Head>
      <Layout>
        <h1>
          {featuresData && featuresData[0]?.title
            ? featuresData[0]?.title
            : urlWithFirstLetterCapitalize(slug)}
        </h1>
        <p>
          Prévu pour différents domaines : rayonnage de bibliothèque ,
          rayonnages pour commerces , rayonnage pour les soins de santé et
          fournitures médicales , rayonnage d’entrepôt , rayonnage de musée et
          conservation , rayonnage d’archives en tout genre …
        </p>
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
