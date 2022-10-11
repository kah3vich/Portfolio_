import { IconType } from 'react-icons/lib';

//! Home Page
export interface IHomePageMocks {
	bannerText: string;
	name: string;
	job: string;
	authorPhoto: string;
	secretLink: string;
	work: {
		title: string;
		description: string;
	};
	portfolio: {
		title: string;
		link: string;
	};
	bio: {
		title: string;
		list: {
			title: string;
			year: string | number;
		}[];
	};
	hobby: {
		title: string;
		list: {
			title: string;
			link: string;
		}[];
	};
	social: {
		title: string;
		list: {
			icon: IconType;
			title: string;
			link: string;
		}[];
	};
	skills: {
		title: string;
		link: string;
	};
}

//| ---

//! Skills Page

export interface ISkillsList {
	id: number;
	name: string;
	progress: string | number;
}

//! Works Page

export type worksList = {
	map?: any;
	id: number;
	title: string;
	year: string | number;
	website: string;
	platform: string;
	stack: string;
	photo: string;
	description: string;
	art: string;
	star: number | string;
};

export type worksObj = {
	works: worksList;
};

//! Work Id Page

type workList = {
	map?: any;
	id: number;
	title: string;
	year: string | number;
	website: string;
	platform: string;
	stack: string;
	photo: string;
	description: string;
	art: string;
	star: number | string;
};

export type workObj = {
	work: workList;
};

//! Navbar Component

export type navbarNavigation = {
	id: number;
	title: string | number;
	path: string;
};

//! Head Component

export type HeadProps = {
	title: string;
	children?: React.ReactNode;
};

//! Animation Component

export type animationProps = {
	children?: React.ReactNode;
	delay?: number;
	classN?: string;
};

//! Main Layout

export type mainProps = {
	children?: React.ReactNode;
};

//! Layout Component

export type layoutProps = {
	children?: React.ReactNode;
	title: string;
};
