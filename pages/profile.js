import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter();

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Here is {router.query.profile}'s Profile page
        </h1>
      </main>
    </Layout>
  )
}