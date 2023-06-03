import { NORMALIZE_CSS, SERVICE_LINK } from '@/app/constants';
import Head from 'next/head';
import React from 'react';
import type { TAppHeadProps } from './types';

const _AppHead = ({ title = 'Page' }: TAppHeadProps) => {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='theme-color' content='#fff' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
			<meta
				name='viewport'
				content='width=device-width, user-scalable=no, initial-scale=1.0,
			maximum-scale=1.0, minimum-scale=1.0'
			/>

			<link rel='shortcut icon' href='/favicon/favicon.ico' type='image/x-icon' />
			<link rel='icon' sizes='16x16' href='/favicon/favicon-16x16.png' type='image/png' />
			<link rel='icon' sizes='32x32' href='/favicon/favicon-32x32.png' type='image/png' />
			<link rel='icon' sizes='48x48' href='/favicon/favicon-48x48.png' type='image/png' />
			<link rel='apple-touch-icon-precomposed' href='/favicon/apple-touch-icon-precomposed.png' />
			<link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />
			<link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-touch-icon-57x57.png' />
			<link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-touch-icon-60x60.png' />
			<link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-touch-icon-72x72.png' />
			<link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-touch-icon-76x76.png' />
			<link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-touch-icon-114x114.png' />
			<link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-touch-icon-120x120.png' />
			<link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-touch-icon-144x144.png' />
			<link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-touch-icon-152x152.png' />
			<link rel='apple-touch-icon' sizes='167x167' href='/favicon/apple-touch-icon-167x167.png' />
			<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon-180x180.png' />
			<link
				rel='apple-touch-icon'
				sizes='1024x1024'
				href='/favicon/apple-touch-icon-1024x1024.png'
			/>

			<meta name='author' content='kah3vich' />
			<meta name='description' content='kah3vich Portfolio Web & Store' />
			<meta name='keywords' content='kah3vich,portfolio,web,3d,store,design,develop' />

			<meta name='twitter:title' content='kah3vich Portfolio' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@kah3vich' />
			<meta name='twitter:creator' content='@kah3vich' />
			<meta name='twitter:image' content={`${SERVICE_LINK}/meta/card.jpg`} />

			<meta property='og:site_name' content='kah3vich' />
			<meta name='og:title' content='kah3vich Portfolio' />
			<meta property='og:type' content='website' />
			<meta property='og:image' content={`${SERVICE_LINK}/meta/card.jpg`} />

			<title>{`${title} | kah3vich`}</title>

			<link rel='stylesheet' href={NORMALIZE_CSS} />
		</Head>
	);
};

export const AppHead = React.memo(_AppHead);
