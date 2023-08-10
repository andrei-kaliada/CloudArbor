export const isImage = (ext: string): boolean => {
	return ['jpeg' , 'png', 'webp', 'gif' ].includes(ext)
}