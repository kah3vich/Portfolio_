import { AnimationContainer, ArrowRight } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { homePageMocks } from '__mocks__/home';

const _HomePage: React.FC = () => {
	return (
		<div className='home'>
			<AnimationContainer className='home__tb'>
				<p>{homePageMocks.bannerText}</p>
			</AnimationContainer>
			<AnimationContainer className='home__info' delay={0.4}>
				<div className='home__text'>
					<h2>{homePageMocks.name}</h2>
					<p>{homePageMocks.job}</p>
				</div>
				<Link href={homePageMocks.secretLink}>
					<a className='home__photo' target='_blank'>
						<Image
							alt='Picture of the author'
							width={250}
							height={250}
							src={homePageMocks.authorPhoto}
						/>
					</a>
				</Link>
			</AnimationContainer>
			<AnimationContainer className='home__work' delay={0.5}>
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
			</AnimationContainer>
			<AnimationContainer className='home__bio' delay={0.55}>
				<div className='home__bio-t'>{homePageMocks.bio.title}</div>
				<ul className='home__bio-l'>
					{homePageMocks.bio.list.map(el => (
						<li className='home__bio-i' key={el.year}>
							<p>{el.title}</p>
							<span>{el.year}</span>
						</li>
					))}
				</ul>
			</AnimationContainer>
			<AnimationContainer className='home__like'>
				<div className='mt-10'>{homePageMocks.hobby.title}</div>
				<div className='home__like-l'>
					{homePageMocks.hobby.list.map(el => (
						<div className='home__like-d' key={el.title}>
							{el.link ? (
								<a href={el.link} className='link'>
									{' '}
									{el.title}
								</a>
							) : (
								el.title
							)}
						</div>
					))}
				</div>
			</AnimationContainer>
			<AnimationContainer className='home__web'>
				<div className='home__web-t'>{homePageMocks.social.title}</div>
				<div className='home__web-l'>
					{homePageMocks.social.list.map(el => (
						<Link href={el.link} key={el.link}>
							<a className='home__web-i' target='_blank'>
								{React.createElement(el.icon, {})}
								<p>{el.title}</p>
							</a>
						</Link>
					))}
				</div>
				<Link href={homePageMocks.skills.link}>
					<a className='home__web-b'>
						<p>{homePageMocks.skills.title}</p>
						<span>
							<ArrowRight />
						</span>
					</a>
				</Link>
			</AnimationContainer>
		</div>
	);
};

export const HomePage = React.memo(_HomePage);
