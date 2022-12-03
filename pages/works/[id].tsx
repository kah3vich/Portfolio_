import { Animation } from '@/components';
import { API_HOST } from '@/constant';
import { Layout } from '@/layout';
import { IWorkProps, TGetServerSidePropsWork } from '@/types';
import { workPageMocks } from '@/__mocks__';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';

export const getServerSideProps = async (context: TGetServerSidePropsWork) => {
	const { id } = context.params;

	const response = await fetch(`${API_HOST}/info/${id}`);
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { work: data }
	};
};

const Work: FC<IWorkProps> = props => {
	const { work } = props;

	if (!work) return null;

	return (
		<Layout title={work.title}>
			<div className='containers'>
				<div className='work'>
					<Animation className='work__h'>
						<Link href='/works'>
							<a className='work__link'>{workPageMocks.title}</a>
						</Link>
						<FiChevronRight />
						<h1 className='work__t'>{work.title}</h1>
						<p className='work__year'>{work.year}</p>
					</Animation>
					<Animation className='work__d' delay={0.5}>
						<p className='work__description'>{work.description}</p>
					</Animation>
					<Animation className='work__i' delay={0.6}>
						<div className='work__items'>
							<span>{workPageMocks.website}</span>
							<Link href={`${work.website}`}>
								<a target='_blank'>{work.website}</a>
							</Link>
						</div>
						<div className='work__items'>
							<span>{workPageMocks.platform}</span>
							<p>{work.platform}</p>
						</div>
						<div className='work__items'>
							<span>{workPageMocks.stack}</span>
							<p>{work.stack}</p>
						</div>
					</Animation>
					<Animation className='work__photo' delay={0.7}>
						<Image
							alt='Picture of the author'
							width={485}
							height={310}
							src={work.art}
						/>
						<Image
							alt='Picture of the author'
							width={485}
							height={310}
							src={work.photo}
						/>
					</Animation>
				</div>
			</div>
		</Layout>
	);
};

export default Work;
