import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { motionVariableAnimation } from './constants';
import type { TAnimationInitialProps } from './types';

const _AnimationInitial = ({ children, router }: TAnimationInitialProps) => {
	return (
		<AnimatePresence>
			<motion.div
				key={router.route}
				initial='pageInitial'
				animate='pageAnimation'
				exit='pageExit'
				variants={motionVariableAnimation}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export const AnimationInitial = React.memo(_AnimationInitial);
