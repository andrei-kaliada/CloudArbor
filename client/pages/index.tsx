import LayoutWrapper from '@/layout/Layout'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <LayoutWrapper title={'CloudArbor'}>
      <main className={styles.main}>
        <h1 style={{ textAlign: 'center' }}>Welcome to our Cloud Server</h1>
      </main>
    </LayoutWrapper>
  )
}

export default Home
