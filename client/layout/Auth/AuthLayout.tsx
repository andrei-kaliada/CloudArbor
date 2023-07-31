import LoginForm from '@/components/Auth/LoginForm'
import RegisterForm from '@/components/Auth/RegisterForm'
import { Tabs } from 'antd'
import Head from 'next/head'
import style from './Auth.module.scss'

const AuthLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main className={style.main}>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: 'Login',
              children: <LoginForm />,
            },
            {
              key: '2',
              label: 'Registration',
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  )
}

export default AuthLayout
