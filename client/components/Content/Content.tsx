import styles from '@/styles/Home.module.scss'
import React, { FC } from 'react'
interface IContentComponent {
  children: React.ReactNode
}

const ContentComponent: FC<IContentComponent> = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.layout}>{children}</div>
    </main>
  )
}

export default ContentComponent
