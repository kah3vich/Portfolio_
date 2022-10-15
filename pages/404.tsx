import Animation from '@/components/Animation';
import Layout from '@/components/layout/Layout';
import { errorPageMocks } from '@/__mocks__';
import { FC } from 'react';

const Error: FC = () => {
	return (
		<Layout title={errorPageMocks.title}>
			<div className='containers'>
				<Animation classN='error' delay={0.5}>
					<h3>{errorPageMocks.title}</h3>
					<p>{errorPageMocks.description}</p>
				</Animation>
			</div>
		</Layout>
	);
};

export default Error;
