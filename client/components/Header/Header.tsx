import { CloudOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

const { Header } = Layout

const HeaderComponent = () => {
  const router = useRouter()
  const selectedMenu = router.pathname;


  return (
    <div>
      <Layout>
        <Header className={styles.root}>
          <div className={styles.headerInner}>
            <div className={styles.headerLeft}>
              <h2>
              <CloudOutlined />
              CloudArbor
              </h2>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[selectedMenu]}
              onSelect={({key}) => router.push(key)}
              items={[
                {
                  key: '/',
                  label: 'Home',
                },
                {
                  key: '/dashboard',
                  label: 'Dashboard',
                },
              ]}
            />
          </div>
        </Header>
      </Layout>
    </div>
  )
}

export default HeaderComponent
