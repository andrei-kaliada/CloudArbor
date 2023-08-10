import { uploadFile } from '@/api'
import styles from '@/styles/Home.module.scss'
import { CloudUploadOutlined } from '@ant-design/icons'
import { Button, Upload, UploadFile, notification } from 'antd'
import { useState } from 'react'

const UploadButton = () => {

	const [fileList, setFileList] = useState<UploadFile[]>();

	const onUploadFile = async (options: any) => {
		try {
			const file = await uploadFile(options)

			if(file.response.status !== 200) {
				notification.error({
					message: 'Error',
					description: `${file.response.data.message}`,
					duration: 3
				})
			}
			setFileList([])
		} catch (error) {
			notification.error({
				message: 'Error',
				description: 'File upload error',
				duration: 3
			})
		}
	}

  return (
      <Upload 
			customRequest={onUploadFile}
			onChange={({fileList}) => setFileList(fileList)}
			fileList={fileList}
			className={styles.upload}
			>
        <Button type='primary' icon={<CloudUploadOutlined />} size='large'>Click to Upload</Button>
      </Upload>
  )
}

export default UploadButton
