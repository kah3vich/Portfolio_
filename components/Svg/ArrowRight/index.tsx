import type { IArrowRightProps } from '@/types';
import React from 'react';

const _ArrowRight: React.FC<IArrowRightProps> = props => {
	const { color = 'black' } = props;

	return (
		<svg viewBox='0 0 24 24' focusable='false' aria-hidden='true'>
			<path
				fill={color}
				d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
			></path>
		</svg>
	);
};

export const ArrowRight = React.memo(_ArrowRight);
