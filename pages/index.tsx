import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineCodepen } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import Animation from '../components/Animation';
import Layout from '../components/layout/Layout';
import { ArrowRight } from '../components/svg/ArrowRight';

export interface ISocialList {}

export const socialList = {};

export const homePageMocks: any = {
	bannerText: 'Hello, I`m an app developer based in Russia!',
	name: 'Kahevich',
	job: 'Digital Master (Developer / Tester)',
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

const Home: FC = () => {
	return (
		<Layout title='Home'>
			<div className='containers'>
				<div className='home'>
					<Animation classN='home__tb'>
						<p>{homePageMocks.bannerText}</p>
					</Animation>
					<Animation classN='home__info' delay={0.4}>
						<div className='home__text'>
							<h2>{homePageMocks.name}</h2>
							<p>{homePageMocks.job}</p>
						</div>
						<Link href={homePageMocks.secretLink}>
							<a className='home__photo' target='_blank'>
								<Image alt='Picture of the author' width={250} height={250} src='/author.jpg' />
							</a>
						</Link>
					</Animation>
					<Animation classN='home__work' delay={0.5}>
						<div className='home__work-t'>{homePageMocks.work.title}</div>
						<div className='home__work-d'>{homePageMocks.work.description}</div>
						<Link href={homePageMocks.portfolio.link}>
							<a className='home__work-b'>
								<p>{homePageMocks.portfolio.title}</p>
								<span>
									<ArrowRight />
								</span>
							</a>
						</Link>
					</Animation>
					<Animation classN='home__bio' delay={0.55}>
						<div className='home__bio-t'>{homePageMocks.bio.title}</div>
						<ul className='home__bio-l'>
							{homePageMocks.bio.list.map(el => {
								<li className='home__bio-i' key={el.year}>
									<span>{el.year}</span>
									<p>{el.title}</p>
								</li>;
							})}
						</ul>
					</Animation>
					<Animation classN='home__like'>
						<div className='home__like-t'>{homePageMocks.hobby.title}</div>
						<div className='home__like-d'>
							Art,
							<a href='https://maxkorzh.live/' className='link'>
								&nbsp;Music
							</a>
							, Drawing, Photography, Machine, Learning, Workout
						</div>
					</Animation>
					<Animation classN='home__web'>
						<div className='home__web-t'></div>
						<div className='home__web-l'>
							<Link href='https://github.com/kah3vich'>
								<a className='home__web-i' target='_blank'>
									<IoLogoGithub />
									<p>@kah3vich</p>
								</a>
							</Link>
							<Link href='https://codepen.io/kah3vich'>
								<a className='home__web-i' target='_blank'>
									<AiOutlineCodepen />
									<p>@kah3vich</p>
								</a>
							</Link>
							<Link href='https://t.me/jzgduhbg'>
								<a className='home__web-i' target='_blank'>
									<FaTelegramPlane />
									<p>@jzgduhbg</p>
								</a>
							</Link>
						</div>
						<Link href='/skills'>
							<a className='home__web-b'>
								<p>My skills</p>
								<span>
									<ArrowRight />
								</span>
							</a>
						</Link>
					</Animation>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
