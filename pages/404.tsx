import { FC } from 'react';
import Animation from '../components/Animation';
import Layout from '../components/layout/Layout';

const Error: FC = () => {
	return (
		<Layout title='Error 404'>
			<div className='containers'>
				<Animation classN='error' delay={0.5}>
					<h3>Error 404</h3>
					<p>
						You have landed on a non-existent page, in order to go to real pages, use the menu
						above.
					</p>
				</Animation>
			</div>
		</Layout>
	);
};

export default Error;
