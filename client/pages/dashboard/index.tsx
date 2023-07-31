import Dashboard from '@/layout/Dashboard/Dashboard'
import LayoutWrapper from '@/layout/Layout'
import { checkAuth } from '@/utils/checkAuth'
import { GetServerSidePropsContext } from 'next'

const DashBoardPage = () => {
  return (
    <LayoutWrapper>
      <Dashboard />
    </LayoutWrapper>
  )
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
