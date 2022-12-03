import { Fonts, Footer, Header, SceneTJ } from '@/components';
import { Main } from '@/layout';
import { motionVariableAnimation } from '@/__mocks__';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';
import '../styles/globals.scss';

const MyApp: FC<AppProps> = props => {
	const { Component, pageProps, router } = props;

	return (
		<Main>
			<Fonts />
			<main>
				<NextNProgress
					color='#81e6d9'
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
					showOnShallow={false}
				/>
				<Header />
				<SceneTJ />
				<AnimatePresence>
					<motion.div
						key={router.route}
						initial='pageInitial'
						animate='pageAnimation'
						exit='pageExit'
						variants={motionVariableAnimation}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
				<Footer />
			</main>
		</Main>
	);
};

export default MyApp;
