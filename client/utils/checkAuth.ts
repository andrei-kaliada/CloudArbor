import * as Auth from '@/api'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx)

  axios.defaults.headers.Authorization = `Bearer ${_token}`

  try {
    const userData = await Auth.getMe()
    return {
      props: userData,
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/dashboard/auth',
        permanent: false,
      },
    }
  }
}
