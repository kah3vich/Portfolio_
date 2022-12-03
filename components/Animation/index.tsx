import { motion } from 'framer-motion';
import React from 'react';
import styles from './styles.module.scss';
import type { IAnimationProps } from './types';

const _Animation: React.FC<IAnimationProps> = props => {
	const { children, delay = 0.3, className = '' } = props;

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				delay: delay,
				y: { type: 'spring', stiffness: 100 },
				default: { duration: 0.8 }
			}}
			style={{ transition: 'all 0.5 ease', width: '100%' }}
			className={styles.parent}
		>
			{children}
		</motion.div>
	);
};

export const Animation = React.memo(_Animation);
