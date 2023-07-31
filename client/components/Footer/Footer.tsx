import { Layout } from 'antd'

const { Footer } = Layout

const FooterComponent = () => {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: 'center',
          maxHeight: '200px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        CloudArdor ©2023 Created by Andrei Kaliada
      </Footer>
    </Layout>
  )
}

export default FooterComponent
