import Link from 'next/link';
import React from 'react';
import type { TAppLinkProps } from './types';

const _AppLink = ({ href, target = '_self', children }: TAppLinkProps) => {
	return (
		<Link href={href}>
			<a target={target}>{children}</a>
		</Link>
	);
};

export const AppLink = React.memo(_AppLink);
