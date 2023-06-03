import type { IconType } from 'react-icons/lib';

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
