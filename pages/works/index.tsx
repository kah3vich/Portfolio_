import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import Animation from '../../components/Animation';
import Layout from '../../components/layout/Layout';
import { API_HOST } from '../../constant';
import type { worksList, worksObj } from '../../types';

export const getStaticProps = async () => {
	try {
		const response = await fetch(`${API_HOST}/info`);
		const data = await response.json();

		if (!data) {
			return {
				notFound: true,
			};
		}

		return {
			props: { works: data },
		};
	} catch {
		return {
			props: { works: null },
		};
	}
};

const Works = ({ works }: worksObj) => {
	if (!works) return null;

	return (
		<Layout title='Works'>
			<div className='containers'>
				<div className='works'>
					<Animation>
						<h1 className='works__t'>Works</h1>
					</Animation>
					<ul className='works__l'>
						{works &&
							works.map(({ id, title, photo, description, star }: worksList) => (
								<li key={id}>
									<Animation classN='works__i' delay={0.3 + id * 0.1}>
										<Link href={`/works/${id}`}>
											<a className='works__w'>
												<div className='works__p'>
													{star == 1 ? <AiFillStar /> : null}
													<Image
														alt='Picture'
														layout='fill'
														src={photo}
														placeholder='blur'
														blurDataURL={`/_next/image?url=${photo}&w=16&q=1`}
													/>
												</div>

												<h3 className='works__title'>{title}</h3>
												<p className='works__description'>{description}</p>
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
