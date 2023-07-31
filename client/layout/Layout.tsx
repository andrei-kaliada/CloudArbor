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
      </Head>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </div>
  )
}

export default LayoutWrapper
