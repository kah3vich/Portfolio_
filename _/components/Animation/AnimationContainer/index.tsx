import { motion } from 'framer-motion';
import React from 'react';
import styles from './styles.module.scss';

const _AnimationContainer: React.FC<any> = props => {
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
			className={`${styles.block} ${className}`}
		>
			{children}
		</motion.div>
	);
};

export const AnimationContainer = React.memo(_AnimationContainer);
