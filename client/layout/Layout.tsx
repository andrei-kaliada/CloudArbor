import ContentComponent from '@/components/Content/Content'
import FooterComponent from '@/components/Footer/Footer'
import HeaderComponent from '@/components/Header/Header'
import React, { FC } from 'react'

interface ILayoutWrapper {
  children: React.ReactElement
}

const LayoutWrapper: FC<ILayoutWrapper> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </div>
  )
}

export default LayoutWrapper
