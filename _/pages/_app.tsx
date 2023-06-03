import { AnimationInitial, Fonts, Footer, Header, SceneTJ } from '@/components';
import { Main } from '@/layout';
import '@/styles';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';

const MyApp: FC<AppProps> = props => {
	const { Component, pageProps, router } = props;

	return (
		<Main>
			<Fonts />
			<>
				<NextNProgress
					color='#81e6d9'
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
					showOnShallow={false}
				/>
				<Header />
				<SceneTJ />
				<AnimationInitial router={router}>
					<Component {...pageProps} />
				</AnimationInitial>
				<Footer />
			</>
		</Main>
	);
};

export default MyApp;
