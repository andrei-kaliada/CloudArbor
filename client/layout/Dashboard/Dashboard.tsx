import { FileDto } from '@/api/dto/files.dto'
import FileCardList from '@/components/FileCardList/FileCardList'
import UploadButton from '@/components/UploadButton/UploadButton'
import styles from '@/styles/Home.module.scss'
import { Menu } from 'antd'
import { NextPage } from 'next'
interface IProps {
	files: FileDto[]
}

const Dashboard: NextPage<IProps> = ({ files }) => {
  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <UploadButton />
        <Menu
          defaultSelectedKeys={['1']}
          className={styles.menu}
          mode="inline"
          items={[
            {
              key: 1,
              label: 'Files',
            },
            {
              key: 2,
              label: 'Photos',
            },
            {
              key: 3,
              label: 'Bin',
            },
          ]}
        />
      </div>
      <div className={styles.rightPanel}>
        <FileCardList files={files} />
      </div>
      
    </main>
  )
}


export default Dashboard
