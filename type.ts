//! Skills Page

export type skillsList = {
	id: number
	name: string
	progress: string | number
}

//! Works Page

export type worksList = {
	map?: any
	id: number
	title: string
	year: string | number
	website: string
	platform: string
	stack: string
	photo: string
	description: string
	art: string
	star: number | string
}

export type worksObj = {
	works: worksList
}

//! Work Id Page

type workList = {
	map?: any
	id: number
	title: string
	year: string | number
	website: string
	platform: string
	stack: string
	photo: string
	description: string
	art: string
	star: number | string
}

export type workObj = {
	work: workList
}

//! Navbar Component

export type navbarNavigation = {
	id: number
	title: string | number
	path: string
}

//! Head Component

export type HeadProps = {
	title: string
	children?: React.ReactNode
}

//! Animation Component

export type animationProps = {
	children?: React.ReactNode
	delay?: number
	classN?: string
}

//! Main Layout

export type mainProps = {
	children?: React.ReactNode
}

//! Layout Component

export type layoutProps = {
	children?: React.ReactNode
	title: string
}
