import { AnimationContainer, Navbar } from '@/components';
import React, { FC } from 'react';

const _Header: FC = () => (
	<header>
		<AnimationContainer>
			<Navbar />
		</AnimationContainer>
	</header>
);

export const Header = React.memo(_Header);
