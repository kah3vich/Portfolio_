import type { INavBarPageMocks } from '@/types';
import { IoLogoGithub } from 'react-icons/io5';

export const navBarPageMocks: INavBarPageMocks = {
	main: {
		link: '/',
		title: 'Kah3vich',
	},
	navigation: [
		{ id: 1, title: 'Works', path: '/works' },
		{ id: 2, title: 'Skills', path: '/skills' },
	],
	other: {
		link: 'https://github.com/kah3vich',
		title: 'Github',
		icon: IoLogoGithub,
	},
};
