import { axios } from '@/core/axios'
import {
  AuthResponseDTO,
  IUser,
  LoginFormDTO,
  RegisterFormDTO,
} from './dto/auth.dto'

export const loginAuth = async (
  values: LoginFormDTO
): Promise<AuthResponseDTO> => {
  return (await axios.post('/auth/login', values)).data
}

export const register = async (
  values: RegisterFormDTO
): Promise<AuthResponseDTO> => {
  return (await axios.post('/auth/register', values)).data
}

export const getMe = async (): Promise<IUser> => {
  return (await axios.get('/users/me')).data
}
