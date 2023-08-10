import ContentComponent from '@/components/Content/Content'
import FooterComponent from '@/components/Footer/Footer'
import HeaderComponent from '@/components/Header/Header'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

interface ILayoutWrapper {
  title: string
}

const LayoutWrapper: FC<PropsWithChildren<ILayoutWrapper>> = ({
  children,
  title,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Nunito:ital,wght@0,300;0,400;0,600;1,400&family=Oswald:wght@300;400;600&family=Ysabeau+Infant:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </div>
  )
}

export default LayoutWrapper
