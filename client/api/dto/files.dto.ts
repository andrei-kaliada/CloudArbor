import { IUser } from '@/interfaces/User.interface'

export interface FileDto {
  id: number
  filename: string
  originalName: string
  size: number
  mimetype: string
  deletedAt: string | null
  user: IUser
}
