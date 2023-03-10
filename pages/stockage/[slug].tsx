import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { findUrlsAndCreateParams } from "@/helper/helper";

const Stockage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <p>Post: {slug}</p>
    </Layout>
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
