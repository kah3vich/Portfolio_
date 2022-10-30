import { NORMALIZE_CSS, SERVICE_LINK } from '@/constant';
import type { IHeadsProps } from '@/types';
import Head from 'next/head';
import React, { FC } from 'react';

const _Heads: FC<IHeadsProps> = props => {
	const { title } = props;

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
			<meta name='twitter:image' content={`${SERVICE_LINK}/card.jpg`} />
			<meta property='og:site_name' content='kahevich' />
			<meta name='og:title' content='Kahevich Portfolio' />
			<meta property='og:type' content='website' />
			<meta property='og:image' content={`${SERVICE_LINK}/card.jpg`} />
			<title>{title || '-'}</title>
			<link rel='stylesheet' href={NORMALIZE_CSS} />
		</Head>
	);
};

export const Heads = React.memo(_Heads);
