import { useRouter } from 'next/router';
import Head from 'next/head'
import Layout from "../../components/Layout";

export default function Profile() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{router.query.profile}</title>
        <meta naem="description" content={`${router.query.profile}'s Profile`} />
      </Head>
      <h1>Here is {router.query.profile}'s Profile page</h1>
    </Layout>
  )
}