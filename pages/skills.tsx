import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
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
import Animation from '../components/Animation';
import Layout from '../components/layout/Layout';
import type { ISkillsList } from '../types';
import { stack } from '../__mocks__/skills';

const Skills: FC = () => {
	const [bar, setBar] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setBar(true);
		}, 1100);
	}, []);

	return (
		<Layout title='Skills'>
			<div className='containers'>
				<div className='skills'>
					<Animation>
						<h1 className='skills__t'>Skills</h1>
					</Animation>
					<Animation delay={0.4}>
						<Animation>
							<ul className='skills__l'>
								{stack.map(({ id, name, progress }: ISkillsList) => (
									<li key={id} className='skills__progress-bar'>
										<div>
											<div className='skills__progress'>{`${progress}%`}</div>
											<div className='skills__title'>{name}</div>
											<div
												className='skills__bar'
												style={{
													width: bar === true ? `${progress}%` : '0%',
												}}
											></div>
										</div>
									</li>
								))}
							</ul>
						</Animation>
					</Animation>
					<Animation delay={0.5}>
						<h2 className='skills__t'>Languages | Frameworks | Tools | Abilities</h2>
					</Animation>
					<Animation>
						<ul className='skills__list'>
							<li className='skills__elem'>
								<DiBootstrap />
								<p>Bootstrap</p>
							</li>
							<li className='skills__elem'>
								<DiCodepen />
								<p>Codepen</p>
							</li>
							<li className='skills__elem'>
								<DiCoffeescript />
								<p>CoffeeS</p>
							</li>
							<li className='skills__elem'>
								<DiGithubBadge />
								<p>GitHub</p>
							</li>
							<li className='skills__elem'>
								<DiCss3 />
								<p>CSS</p>
							</li>
							<li className='skills__elem'>
								<DiGulp />
								<p>Gulp</p>
							</li>
							<li className='skills__elem'>
								<DiHtml5 />
								<p>HTML</p>
							</li>
							<li className='skills__elem'>
								<DiJavascript1 />
								<p>Javascript</p>
							</li>
							<li className='skills__elem'>
								<DiJqueryLogo />
								<p>Jquery</p>
							</li>
							<li className='skills__elem'>
								<DiLaravel />
								<p>Laravel</p>
							</li>
							<li className='skills__elem'>
								<DiLess />
								<p>LESS</p>
							</li>
							<li className='skills__elem'>
								<DiLinux />
								<p>Linux</p>
							</li>
							<li className='skills__elem'>
								<DiNodejsSmall />
								<p>NodeJS</p>
							</li>
							<li className='skills__elem'>
								<DiNpm />
								<p>NPM</p>
							</li>
							<li className='skills__elem'>
								<DiPhp />
								<p>PHP</p>
							</li>
							<li className='skills__elem'>
								<DiPython />
								<p>Python</p>
							</li>
							<li className='skills__elem'>
								<DiReact />
								<p>React</p>
							</li>
							<li className='skills__elem'>
								<DiSass />
								<p>Sass</p>
							</li>
							<li className='skills__elem'>
								<DiWordpress />
								<p>Wordpress</p>
							</li>
							<li className='skills__elem'>
								<DiVisualstudio />
								<p>VScode</p>
							</li>
						</ul>
						<Link href='https://github.com/kah3vich/kah3vich#-languages--frameworks--tools--abilities-'>
							<a className='skills__b' target='_blank'>
								<p>All skills</p>
								<span>
									<svg viewBox='0 0 24 24' focusable='false' aria-hidden='true'>
										<path fill='black' d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
									</svg>
								</span>
							</a>
						</Link>
					</Animation>
				</div>
			</div>
		</Layout>
	);
};

export default Skills;
