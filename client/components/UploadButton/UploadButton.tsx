import styles from '@/styles/Home.module.scss'
import { CloudUploadOutlined } from '@ant-design/icons'
import { Button, Upload, UploadFile } from 'antd'
import { useState } from 'react'

const UploadButton = () => {

	const [fileList, setFileList] = useState<UploadFile[]>();

	const onUploadFile = (options: any) => {
		console.log('options:', options);
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
