import * as Auth from '@/api'
import { Button, Form, Input, notification } from 'antd'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { IRegistrationForm } from './Auth.interface'
import style from './Auth.module.scss'

const RegisterForm = () => {
  const { push } = useRouter()

  const onFinish = async (value: IRegistrationForm) => {
    try {
      const { token } = await Auth.auth.register(value)
      notification.success({
        message: 'Registration Success',
        description: 'User was registered successfully',
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
      console.warn('Error:', error)
    }
  }

  return (
    <div className={style.formBlock}>
      <Form name="basic" labelCol={{ span: 6 }} onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: 'Please input your full name!' }]}
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm
