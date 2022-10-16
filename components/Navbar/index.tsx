import { Theme } from '@/components';
import { INavbarNavigation } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { IoLogoGithub } from 'react-icons/io5';

const navigation: INavbarNavigation[] = [
	{ id: 1, title: 'Works', path: '/works' },
	{ id: 2, title: 'Skills', path: '/skills' },
];

const _Navbar: FC = () => {
	const { pathname } = useRouter();

	return (
		<nav className='containers navbar'>
			<Link href='/'>
				<a className='navbar__l'>
					<h1>Kah3vich</h1>
				</a>
			</Link>
			<div className='navbar__b'>
				{navigation.map(({ id, title, path }: INavbarNavigation) => (
					<Link key={id} href={path}>
						<a className={`navbar__link ${pathname === path ? 'navbar__a' : ''}`}>{title}</a>
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
	);
};

export const Navbar = React.memo(_Navbar);
