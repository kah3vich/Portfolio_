import { AppHead } from '@/shared/App/AppHead';
import React from 'react';
import type { TLayoutProps } from './types';

const _Layout = ({ children, title }: TLayoutProps) => {
	return (
		<>
			<AppHead title={title} />
			{children}
		</>
	);
};

export const Layout = React.memo(_Layout);
