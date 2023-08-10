
export const fileColor = {
	gif: 'red',
	jpeg: 'green',
	png: 'blue',
	webp: 'orange',
	pdf: 'purple',
} as const

export type ExtColors = keyof typeof fileColor
export type Color = typeof fileColor[ExtColors]

export const checkFileColor = (value: string): Color=> {
	return fileColor[value as ExtColors]
}