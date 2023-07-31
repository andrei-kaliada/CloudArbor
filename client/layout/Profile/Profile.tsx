import { IUser } from '@/interfaces/User.interface'
import { Button } from 'antd'
import { destroyCookie } from 'nookies'
import { FC } from 'react'
import styles from './Profile.module.scss'

interface IProps {
  userData: IUser
}

const ProfileComponent: FC<IProps> = ({ userData }) => {
  const onLogOut = async () => {
    if (window.confirm('Are you sure you want to log out?')) {
      destroyCookie(null, '_token', { path: '/' })
      location.href = '/'
    }
  }

  return (
    <main>
      <div className={styles.root}>
        <h1>My profile</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Full name: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
        <Button onClick={onLogOut} type="primary" danger>
          Log out
        </Button>
      </div>
    </main>
  )
}

export default ProfileComponent
