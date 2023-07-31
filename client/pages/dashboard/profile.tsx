import { IUser } from '@/interfaces/User.interface'
import LayoutWrapper from '@/layout/Layout'
import ProfileComponent from '@/layout/Profile/Profile'
import { checkAuth } from '@/utils/checkAuth'
import { GetServerSidePropsContext } from 'next'
import React from 'react'

interface IProps {
  userData: IUser
}

const DashboardProfilePage = ({ userData }: IProps) => {
  return <ProfileComponent userData={userData} />
}

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <LayoutWrapper title={'Dashboard'}>{page}</LayoutWrapper>
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const userData = await checkAuth(context)
  console.log(userData)
  if ('redirect' in userData) {
    return {
      redirect: {
        destination: '/dashboard/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {
      userData: userData.props,
    },
  }
}

export default DashboardProfilePage
