// import { AnimationInitial, Fonts, Footer, Header, SceneTJ } from '@/components';
// import { Main } from '@/layout';
import { AnimationInitial } from '@/entities/Animation/AnimationInitial';
import { MainLayout } from '@/processes/MainLayout';
import { AppProps } from 'next/app';
import '../app/styles/globals.scss';

const App = (props: AppProps) => {
	const { Component, pageProps, router } = props;

	return (
		<MainLayout>
			{/* <Header />
			<SceneTJ /> */}
			<AnimationInitial router={router}>
				<Component {...pageProps} />
			</AnimationInitial>
			{/* <Footer /> */}
		</MainLayout>
	);
};

export default App;
