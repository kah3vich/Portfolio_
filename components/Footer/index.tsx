import { Animation } from '@/components';
import { footerPageMocks } from '@/__mocks__';
import React, { FC } from 'react';

const _Footer: FC = () => (
	<footer>
		<Animation className='containers' delay={0.6}>
			<h3>{footerPageMocks.title}</h3>
		</Animation>
	</footer>
);

export const Footer = React.memo(_Footer);
