import { Header } from '@/entities/Header';
import { Layout } from '@/processes/Layout';

export const getStaticProps = async () => {
	return {
		props: {
			data: null,
		},
	};
};

const HomePage = () => {
	return (
		<Layout>
			{/* <Theme />
			<div className='text-pink-600 dark:text-slate-800'>123</div> */}
			<Header />
		</Layout>
	);
};

export default HomePage;
