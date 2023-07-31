import UploadButton from '@/components/UploadButton/UploadButton'
import styles from '@/styles/Home.module.scss'
import { Menu } from 'antd'

const Dashboard = () => {
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
      <h1>DashBoardPage</h1>
    </main>
  )
}

export default Dashboard
