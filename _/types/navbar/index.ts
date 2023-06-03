import { IconType } from 'react-icons/lib';

export interface INavbarNavigation {
	id: number;
	title: string | number;
	path: string;
}

export interface INavbarMain {
	link: string;
	title: string;
}

export interface INavbarOther {
	link: string;
	title: string;
	icon: IconType;
}

export interface INavBarPageMocks {
	main: INavbarMain;
	navigation: INavbarNavigation[];
	other: INavbarOther;
}
