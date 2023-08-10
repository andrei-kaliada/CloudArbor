import { CloudOutlined } from '@ant-design/icons'
import { Avatar, Button, Layout, Popover } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'
import styles from './Header.module.scss'

const { Header } = Layout

const HeaderComponent = () => {
  const router = useRouter()
  const selectedMenu = router.pathname
  const onLogOut = async () => {
    if (window.confirm('Are you sure you want to log out?')) {
      destroyCookie(null, '_token', { path: '/' })
      location.href = '/'
    }
  }

  return (
    <div>
      <Layout>
        <Header className={styles.root}>
          <div className={styles.headerInner}>
            <div className={styles.headerLeft}>
              <Link href={'/'}>
                <h2>
                  <CloudOutlined />
                  CloudArbor
                </h2>
              </Link>
            </div>
            <div>
              <Link href={'/dashboard'}>Dashboard</Link>
            </div>
            <div className={styles.headerRight}>
            <Button> 
            <Link href={'/dashboard/auth'}>
                Log In
              </Link>
            </Button>
              <Popover
                content={
                  <div className={styles.popButtons}>
                    <Button
                      onClick={() => router.push('/dashboard/profile')}
                      type="primary"
                    >
                      Profile
                    </Button>
                    <Button onClick={onLogOut} type="primary" danger>
                      Log out
                    </Button>
                  </div>
                }
                trigger="click"
              >
                <Avatar>A</Avatar>
              </Popover>
            </div>
          </div>
        </Header>
      </Layout>
    </div>
  )
}

export default HeaderComponent
