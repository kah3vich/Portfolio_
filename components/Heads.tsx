import Head from 'next/head';
import { HeadProps } from '../types';

const Heads = ({ title }: HeadProps) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content='Kahevich Portfolio' />
			<meta name='author' content='Kahevich' />
			<link rel='apple-touch-icon' href='logos.png' />
			<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			<meta name='twitter:title' content='Kahevich Portfolio' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@kahevich' />
			<meta name='twitter:creator' content='@kahevich' />
			<meta name='twitter:image' content='https://portfolio-kahevich.vercel.app/card.jpg' />
			<meta property='og:site_name' content='kahevich' />
			<meta name='og:title' content='Kahevich Portfolio' />
			<meta property='og:type' content='website' />
			<meta property='og:image' content='https://portfolio-kahevich.vercel.app/card.jpg' />
			<title>{title}</title>
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
			/>
		</Head>
	);
};

export default Heads;
