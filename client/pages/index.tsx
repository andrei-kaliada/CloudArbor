import LayoutWrapper from '@/layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <LayoutWrapper>
      <div>
        <Head>
          <title>CloudArbor</title>
        </Head>

        <main className={styles.main}>
          <h1>Hello world</h1>
        </main>
      </div>
    </LayoutWrapper>
  )
}

export default Home
