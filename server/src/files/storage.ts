import { diskStorage } from 'multer'

const generateId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString())
    .join('')

const normalizeFileName = (req, file, callback) => {
  const fileName = file.originalname.split('.').pop()

  callback(null, `${generateId()}.${fileName}`)
}

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
})
