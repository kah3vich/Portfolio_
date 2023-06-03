import { IconType } from 'react-icons/lib';

export interface ISkillsList {
	id: number;
	name: string;
	progress: string | number;
}

export interface ISkillsStackList {
	icon: IconType;
	title: string;
}

export interface ISkillsPageMocks {
	title: string;
	listLanguages: ISkillsList[];
	titleStack: string;
	listStack: ISkillsStackList[];
	buttonAllStack: {
		title: string;
		link: string;
	};
}
