import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import {
  findUrlsAndCreateParams,
  urlWithFirstLetterCapitalize,
} from "@/helper/helper";
import Feature from "@/components/Feature/feature";
import rayonnageMobile1 from "../../assets/images/rayonnage-mobile.webp";

const Stockage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
      </Head>
      <Layout>
        <p>Post: {slug}</p>
        <Feature
          text={
            "prévu pour différents domaines : rayonnage de bibliothèque , rayonnages pour commerces , rayonnage pour les soins de santé et fournitures médicales , rayonnage d’entrepôt , rayonnage de musée et conservation , rayonnage d’archives en tout genre…"
          }
          imgSrc={rayonnageMobile1}
          imgAlt="Rayonnage mobile"
          imgTitle="Rayonnage mobile manuel"
          isInverted={false}
        />
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
    props: { post: {} },
  };
}
