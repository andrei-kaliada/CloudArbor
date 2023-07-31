import Dashboard from '@/layout/Dashboard/Dashboard'
import LayoutWrapper from '@/layout/Layout'
import { checkAuth } from '@/utils/checkAuth'
import { GetServerSidePropsContext } from 'next'

const DashBoardPage = () => {
  return <Dashboard />
}

DashBoardPage.getLayout = (page: React.ReactNode) => {
  return <LayoutWrapper title={'Dashboard'}>{page}</LayoutWrapper>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authData = await checkAuth(ctx)

  if ('redirect' in authData) {
    return authData
  }

  return {
    props: {},
  }
}

export default DashBoardPage
