import { IMainProps } from '@/types';
import React, { FC } from 'react';

const _Main: FC<IMainProps> = props => {
	const { children } = props;

	return <main>{children}</main>;
};

export const Main = React.memo(_Main);
