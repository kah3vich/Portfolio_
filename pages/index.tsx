import Layout from '../components/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { AiOutlineCodepen } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import Animation from '../components/Animation'

const Home = () => {
	return (
		<Layout title='Home'>
			<div className='containers'>
				<div className='home'>
					<Animation classN='home__tb'>
						<p>Hello, I`m an app developer based in Russia!</p>
					</Animation>
					<Animation classN='home__info' delay={0.4}>
						<div className='home__text'>
							<h2>Kahevich</h2>
							<p>Digital Master (Developer / Tester)</p>
						</div>
						<div className='home__photo'>
							<Image
								alt='Picture of the author'
								width={250}
								height={250}
								src='/author.jpg'
							/>
						</div>
					</Animation>
					<Animation classN='home__work' delay={0.5}>
						<div className='home__work-t'>Work</div>
						<div className='home__work-d'>
							A self-taught full stack web developer. My passion for software
							lies with dreaming up ideas and making them come true with elegant
							interfaces. I take great care in the experience, architecture, and
							code quality. I learned a lot from the open-source community and i
							love how collaboration and knowledge sharing happened through
							open-source.
						</div>
						<Link href='/works'>
							<a className='home__work-b'>
								<p>My portfolio</p>
								<span>
									<svg viewBox='0 0 24 24' focusable='false' aria-hidden='true'>
										<path
											fill='black'
											d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
										></path>
									</svg>
								</span>
							</a>
						</Link>
					</Animation>
					<Animation classN='home__bio' delay={0.55}>
						<div className='home__bio-t'>Bio</div>
						<ul className='home__bio-l'>
							<li className='home__bio-i'>
								<span>2002</span>
								<p>Born in Russia, Moscow.</p>
							</li>
							<li className='home__bio-i'>
								<span>2019</span>
								<p>Freelance work and study courses at the university.</p>
							</li>
							<li className='home__bio-i'>
								<span>2021</span>
								<p>Work in a company.</p>
							</li>
						</ul>
					</Animation>
					<Animation classN='home__like'>
						<div className='home__like-t'>I ♥</div>
						<div className='home__like-d'>
							Art,
							<a href='https://maxkorzh.live/' className='link'>
								&nbsp;Music
							</a>
							, Drawing, Photography, Machine, Learning, Workout
						</div>
					</Animation>
					<Animation classN='home__web'>
						<div className='home__web-t'>On the web</div>
						<div className='home__web-l'>
							<Link href='https://github.com/kah3vich'>
								<a className='home__web-i' target='_blanc'>
									<IoLogoGithub />
									<p>@kah3vich</p>
								</a>
							</Link>
							<Link href='https://codepen.io/kah3vich'>
								<a className='home__web-i' target='_blanc'>
									<AiOutlineCodepen />
									<p>@kah3vich</p>
								</a>
							</Link>
							<Link href='https://t.me/jzgduhbg'>
								<a className='home__web-i' target='_blanc'>
									<FaTelegramPlane />
									<p>@jzgduhbg</p>
								</a>
							</Link>
						</div>
						<Link href='/skills'>
							<a className='home__web-b'>
								<p>My skills</p>
								<span>
									<svg viewBox='0 0 24 24' focusable='false' aria-hidden='true'>
										<path
											fill='black'
											d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
										></path>
									</svg>
								</span>
							</a>
						</Link>
					</Animation>
				</div>
			</div>
		</Layout>
	)
}

export default Home
