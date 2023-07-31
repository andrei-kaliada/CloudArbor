import { Layout } from 'antd'
import React, { FC } from 'react'

interface IContentComponent {
  children: React.ReactNode
}

const { Content } = Layout

const ContentComponent: FC<IContentComponent> = ({ children }) => {
  return (
    <Layout>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, background: '#fff' }}>{children}</div>
      </Content>
    </Layout>
  )
}

export default ContentComponent
