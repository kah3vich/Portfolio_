import { AppLink } from '../App/AppLink';

export const Logo = () => {
	return (
		<AppLink href='/'>
			<div className='w-12 h-12 flex items-center justify-center bg-black dark:bg-white rounded-lg p-2 logo transition-all'>
				<svg
					version='1.0'
					xmlns='http://www.w3.org/2000/svg'
					width='160.000000pt'
					height='160.000000pt'
					viewBox='0 0 160.000000 160.000000'
					preserveAspectRatio='xMidYMid meet'
				>
					<g
						transform='translate(0.000000,160.000000) scale(0.100000,-0.100000)'
						fill='#ffffff'
						stroke='none'
					>
						<path d='M1330 1410 l0 -70 75 0 75 0 0 70 0 70 -75 0 -75 0 0 -70z' />
						<path
							d='M180 675 l0 -515 70 0 70 0 0 178 0 177 84 84 84 84 29 -40 c15 -22
98 -139 183 -261 l155 -221 92 -1 93 0 -168 228 c-93 125 -194 263 -227 306
l-58 79 214 208 214 208 -90 1 -90 0 -250 -250 c-137 -137 -253 -250 -257
-250 -5 0 -8 113 -8 250 l0 250 -70 0 -70 0 0 -515z'
						/>
					</g>
				</svg>
			</div>
		</AppLink>
	);
};
