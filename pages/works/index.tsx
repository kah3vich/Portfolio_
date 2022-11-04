import { Animation } from '@/components';
import { API_HOST } from '@/constant';
import { Layout } from '@/layout';
import { IWorksProps } from '@/types';
import { worksPageMocks } from '@/__mocks__';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

export const getStaticProps = async () => {
	try {
		const response = await fetch(`${API_HOST}/info`);
		const data = await response.json();

		return {
			props: { works: data }
		};
	} catch {
		return {
			props: { works: null }
		};
	}
};

const Works: FC<IWorksProps> = props => {
	const { works } = props;

	if (!works) return null;

	return (
		<Layout title='Works'>
			<div className='containers'>
				<div className='works'>
					<Animation>
						<h1 className='works__t'>{worksPageMocks.title}</h1>
					</Animation>
					<ul className='works__l'>
						{works &&
							works.map(el => (
								<li key={el.id}>
									<Animation classN='works__i' delay={0.3 + el.id * 0.1}>
										<Link href={`/works/${el.id}`}>
											<a className='works__w'>
												<div className='works__p'>
													{el.star === 1 && <AiFillStar />}
													<Image
														alt='Picture'
														layout='fill'
														src={el.photo}
														placeholder='blur'
														blurDataURL={`/_next/image?url=${el.photo}&w=16&q=1`}
													/>
												</div>

												<h3 className='works__title'>{el.title}</h3>
												<p className='works__description'>{el.description}</p>
											</a>
										</Link>
									</Animation>
								</li>
							))}
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default Works;
