import { getAllFiles } from '@/api'
import { FileDto } from '@/api/dto/files.dto'
import Dashboard from '@/layout/Dashboard/Dashboard'
import LayoutWrapper from '@/layout/Layout'
import { checkAuth } from '@/utils/checkAuth'
import { GetServerSidePropsContext, NextPage } from 'next'

interface IProps {
	files: FileDto[]
}

const DashBoardPage: NextPage<IProps> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} = ({ files }) => {
  return <Dashboard files={files} />
}

DashBoardPage.getLayout = (page: React.ReactNode) => {
  return <LayoutWrapper title={'Dashboard'}>{page}</LayoutWrapper>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authData = await checkAuth(ctx)

  if ('redirect' in authData) {
    return authData
  }

  const files = await getAllFiles()

	if(files) {
		return {
			props: {
				files
			}
		}
	} else {
		return {
			props: {
				files: []
			}
		}
	}
}

export default DashBoardPage
