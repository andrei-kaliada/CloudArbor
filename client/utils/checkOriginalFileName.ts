import { FileDto } from '@/api/dto/files.dto'

export const getOriginalFileName = (file: FileDto) => {
	return file.originalName.split('.').pop()
}