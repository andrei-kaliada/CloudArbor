import { loginAuth } from '@/api'
import { ILoginForm } from '@/interfaces/Auth.interface'
import { Button, Form, Input, notification } from 'antd'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { FC } from 'react'
import style from './Auth.module.scss'

const LoginForm: FC = () => {
  const { push } = useRouter()

  const onFinish = async (values: ILoginForm) => {
    try {
      const { token } = await loginAuth(values)
      notification.success({
        message: 'Successful!',
        description: 'User was authorized',
        duration: 3,
      })

      setCookie(null, '_token', token, { path: '/' })
      push('/dashboard')
    } catch (error) {
      const err = error as AxiosError
      notification.error({
        message: 'Error',
        description: `${(err.response?.data as Error).message}`,
        duration: 3,
      })
      console.warn('LoginError:', error)
    }
  }

  return (
    <div className={style.formBlock}>
      <Form name="basic" labelCol={{ span: 5 }} onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
