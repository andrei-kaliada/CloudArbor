import axios from 'axios'
import { FileDto } from './dto/files.dto'

type FileType = 'all' | 'photos' | 'files'

export const getAll = async (type: FileType = 'all'): Promise<FileDto[]> => {
  return (await axios.get(`/files?type=${type}`)).data
}

export const uploadFile = async (file: FileDto): Promise<FileDto> => {
  return (await axios.post('/files', file)).data
}

export const deleteFile = async (filesId: number) => {
  return await axios.delete(`/files?filesId=${filesId}`)
}
