import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoLogoGithub } from 'react-icons/io5'
import Theme from './Theme'

const navigation = [
	{ id: 1, title: 'Works', path: '/works' },
	{ id: 2, title: 'Skills', path: '/skills' },
]

const Navbar: FC = () => {
	const { pathname } = useRouter()

	return (
		<nav className='containers navbar'>
			<Link href='/'>
				<a className='navbar__l'>
					<h1>Kah3vich</h1>
				</a>
			</Link>
			<div className='navbar__b'>
				{navigation.map(({ id, title, path }) => (
					<Link key={id} href={path}>
						<a
							className={`navbar__link ${
								pathname === path ? 'navbar__a' : null
							}`}
						>
							{title}
						</a>
					</Link>
				))}
				<Link href='https://github.com/kah3vich'>
					<a target='_blank' className='navbar__p'>
						<IoLogoGithub />
						Github
					</a>
				</Link>
			</div>
			<Theme />
		</nav>
	)
}

export default Navbar
