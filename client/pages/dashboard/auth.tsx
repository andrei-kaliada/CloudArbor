import LayoutWrapper from '@/layout/Layout'
import AuthLayout from 'layout/Auth/AuthLayout'
import { FC } from 'react'

const AuthPage: FC = () => {
  return (
    <LayoutWrapper title={'Authorization'}>
      <AuthLayout />
    </LayoutWrapper>
  )
}

export default AuthPage
