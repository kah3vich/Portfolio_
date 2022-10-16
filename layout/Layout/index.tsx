import { Heads } from '@/components';
import { ILayoutProps } from '@/types';
import React, { FC } from 'react';

const _Layout: FC<ILayoutProps> = props => {
	const { children, title } = props;

	return (
		<div>
			<Heads title={title} />
			{children}
		</div>
	);
};

export const Layout = React.memo(_Layout);
