import React from 'react';
import type { TMainLayout } from './types';

const _MainLayout = ({ children }: TMainLayout) => {
	return <main>{children}</main>;
};

export const MainLayout = React.memo(_MainLayout);
