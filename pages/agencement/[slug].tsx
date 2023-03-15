import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import {
  findUrlsAndCreateParams,
  urlWithFirstLetterCapitalize,
} from "@/helper/helper";

const Agencement = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{`Mc Montage - ${urlWithFirstLetterCapitalize(slug)}`}</title>
      </Head>
      <Layout>
        <p>Post: {slug}</p>
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
