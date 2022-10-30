import type { ISkillsPageMocks } from '@/types';
import {
	DiBootstrap,
	DiCodepen,
	DiCoffeescript,
	DiCss3,
	DiGithubBadge,
	DiGulp,
	DiHtml5,
	DiJavascript1,
	DiJqueryLogo,
	DiLaravel,
	DiLess,
	DiLinux,
	DiNodejsSmall,
	DiNpm,
	DiPhp,
	DiPython,
	DiReact,
	DiSass,
	DiVisualstudio,
	DiWordpress,
} from 'react-icons/di';

export const skillsPageMocks: ISkillsPageMocks = {
	title: 'Skills',
	listLanguages: [
		{ id: 1, name: 'HTML', progress: '95' },
		{ id: 2, name: 'CSS', progress: '95' },
		{ id: 2, name: 'JS', progress: '80' },
		{ id: 3, name: 'Python', progress: '70' },
		{ id: 4, name: 'PHP', progress: '50' },
		{ id: 5, name: 'C++', progress: '45' },
	],
	titleStack: 'Languages | Frameworks | Tools | Abilities',
	listStack: [
		{
			icon: DiBootstrap,
			title: 'Bootstrap',
		},
		{
			icon: DiCodepen,
			title: 'Codepen',
		},
		{
			icon: DiCoffeescript,
			title: 'CoffeeS',
		},
		{
			icon: DiGithubBadge,
			title: 'GitHub',
		},
		{
			icon: DiCss3,
			title: 'CSS',
		},
		{
			icon: DiGulp,
			title: 'Gulp',
		},
		{
			icon: DiHtml5,
			title: 'HTML',
		},
		{
			icon: DiJavascript1,
			title: 'Javascript',
		},
		{
			icon: DiJqueryLogo,
			title: 'Jquery',
		},
		{
			icon: DiLaravel,
			title: 'Laravel',
		},
		{
			icon: DiLess,
			title: 'LESS',
		},
		{
			icon: DiLinux,
			title: 'Linux',
		},
		{
			icon: DiNodejsSmall,
			title: 'NodeJS',
		},
		{
			icon: DiNpm,
			title: 'NPM',
		},
		{
			icon: DiPhp,
			title: 'PHP',
		},
		{
			icon: DiPython,
			title: 'Python',
		},
		{
			icon: DiReact,
			title: 'React',
		},
		{
			icon: DiSass,
			title: 'Sass',
		},
		{
			icon: DiWordpress,
			title: 'Wordpress',
		},
		{
			icon: DiVisualstudio,
			title: 'VScode',
		},
	],
	buttonAllStack: {
		title: 'All skills',
		link: 'https://github.com/kah3vich/kah3vich#-languages--frameworks--tools--abilities-',
	},
};
