import axios from 'axios'
import { FileDto } from './dto/files.dto'

type FileType = 'all' | 'photos' | 'files'

export const getAllFiles = async (type: FileType = 'all'): Promise<FileDto[]> => {
  return (await axios.get(`/files?type=${type}`)).data
}

export const uploadFile = async (options: any) => {
  const { onError, onSuccess, onProgress, file } = options
  const formData = new FormData()

  formData.append('file', file)

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    onProgress: (event: ProgressEvent) => {
      onProgress({ percent: (event.loaded / event.total) * 100 })
    },
  }

  try {
    const data = (await axios.post('/files', formData, config)).data

    onSuccess()

    return data
  } catch (error) {
    onError({error})
  }
}

export const deleteFile = async (filesId: number) => {
  return await axios.delete(`/files?filesId=${filesId}`)
}
