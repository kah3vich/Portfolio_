import type { IHomePageMocks } from '@/types';
import { AiOutlineCodepen } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';

export const homePageMocks: IHomePageMocks = {
	bannerText: 'Hello, I`m an app developer based in Russia!',
	name: 'Kahevich',
	job: 'Digital Master (Developer / Tester)',
	authorPhoto: '/img/author.jpg',
	secretLink: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/I_am_always_near.png',
	work: {
		title: 'Work',
		description:
			'A self-taught full stack web developer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality. I learned a lot from the open-source community and i love how collaboration and knowledge sharing happened through open-source.',
	},
	portfolio: {
		title: 'portfolio',
		link: '/works',
	},
	bio: {
		title: 'Bio',
		list: [
			{
				title: '2002',
				year: 'Born in Russia, NN.',
			},
			{
				title: '2019',
				year: 'Freelance work and study courses at the university.',
			},
			{
				title: '2021',
				year: 'Work in a company.',
			},
		],
	},
	hobby: {
		title: 'I ♥',
		list: [
			{
				title: 'Art',
				link: '',
			},
			{
				title: 'Music',
				link: 'https://maxkorzh.live/',
			},
			{
				title: 'Drawing',
				link: '',
			},
			{
				title: 'Photography',
				link: '',
			},
			{
				title: 'Machine',
				link: '',
			},
			{
				title: 'Learning',
				link: '',
			},
			{
				title: 'Workout',
				link: '',
			},
		],
	},
	social: {
		title: 'On the web',
		list: [
			{
				icon: IoLogoGithub,
				title: '@kah3vich',
				link: 'https://github.com/kah3vich',
			},
			{
				icon: AiOutlineCodepen,
				title: '@kah3vich',
				link: 'https://codepen.io/kah3vich',
			},
			{
				icon: FaTelegramPlane,
				title: '@jzgduhbg',
				link: 'https://t.me/jzgduhbg',
			},
		],
	},
	skills: {
		title: 'My skills',
		link: '/skills',
	},
};
