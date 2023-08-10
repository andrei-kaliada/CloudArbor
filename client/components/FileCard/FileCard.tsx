import { FileDto } from '@/api/dto/files.dto'
import { checkFileColor } from '@/utils/checkFileColor'
import { getOriginalFileName } from '@/utils/checkOriginalFileName'
import { isImage } from '@/utils/isImage'
import { FileTextOutlined } from '@ant-design/icons'
import { NextPage } from 'next'
import Image from 'next/image'
import styles from './FileCard.module.scss'

interface IProps {
	file: FileDto
}

const FileCard: NextPage<IProps> = ({ file }) => {
	const ext = getOriginalFileName(file) as string
	const fileColor = checkFileColor(ext)

	const imageUrl = (file: FileDto) => {
		return `http://localhost:4200/uploads/${file.filename}`
	}

	return <div className={styles.root}>
		<div className={styles.icon}>
			<i className={styles[fileColor]}>{getOriginalFileName(file)}</i>
			{
				isImage(ext) ? (
					<Image className={styles.image} width={100} height={100} src={imageUrl(file)} alt={'img'} />
				) : (
					<FileTextOutlined />
				)
			}
		</div>
		<span>{file.originalName}</span>
	</div>
};

export default FileCard;
