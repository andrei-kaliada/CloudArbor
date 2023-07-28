import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CloudArbor</title>
      </Head>

      <main>
        <h1>Hello world</h1>
      </main>
      
    </div>
  )
}

export default Home
