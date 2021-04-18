import Head from 'next/head'
import Link from "next/link"
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

function ProfileLink(props) {

  return (
    <div>
      <Link href={`/profiles/[profile]`} as={`/profiles/${props.profile}`}>
        <a>Go to {props.profile}'s profile</a>
      </Link>
      {/* <Link href={`/profile?name=${props.name}`}>
        <a>Go to {props.name}'s profile</a>
      </Link> */}
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>main</title>
      </Head>

      <h1 className={styles.title}>Profile List</h1>
      <ProfileLink profile="ellen" />
      <ProfileLink profile="momoka" />
      <ProfileLink profile="bibi" />
    </Layout>
  )
}