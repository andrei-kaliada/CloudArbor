import { FileDto } from '@/api/dto/files.dto'
import { NextPage } from 'next'
import FileCard from '../FileCard/FileCard'

interface IProps {
	files: FileDto[]
}

const FileCardList: NextPage<IProps> = ({files}) => {
	console.log(files);
	return (
		<>
			{
				files.map(file => (
					<FileCard key={file.id} file={file} />
				))
			}
		</>
	)
}

export default FileCardList
