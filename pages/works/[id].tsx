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

	const response = await fetch(`${API_HOST}/info/${id}`, {
		method: 'GET',
		headers: {
			'User-Agent':
				'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
			Accept: 'application/json; charset=UTF-8',
		},
	});
	const data = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { work: data },
	};
};

const Work: FC<IWorkProps> = props => {
	const { work } = props;

	if (!work) return null;

	return (
		<Layout title={work.title}>
			<div className='containers'>
				<div className='work'>
					<Animation classN='work__h'>
						<Link href='/works'>
							<a className='work__link'>{workPageMocks.title}</a>
						</Link>
						<FiChevronRight />
						<h1 className='work__t'>{work.title}</h1>
						<p className='work__year'>{work.year}</p>
					</Animation>
					<Animation classN='work__d' delay={0.5}>
						<p className='work__description'>{work.description}</p>
					</Animation>
					<Animation classN='work__i' delay={0.6}>
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
					<Animation classN='work__photo' delay={0.7}>
						<Image alt='Picture of the author' width={485} height={310} src={work.art} />
						<Image alt='Picture of the author' width={485} height={310} src={work.photo} />
					</Animation>
				</div>
			</div>
		</Layout>
	);
};

export default Work;
