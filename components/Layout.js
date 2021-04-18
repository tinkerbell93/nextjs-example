import Head from 'next/head'
import Header from './Header';
import styles from '../styles/Home.module.css'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
}

export default function Layout(props) {
  console.log(props);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
    </>
  )
}