import { AnimatePresence, motion } from 'framer-motion';
import { Router } from 'next/router';
import React from 'react';
import { motionVariableAnimation } from '__mocks__/_app';

export interface IAnimationInitialProps {
	children: React.ReactNode;
	router: Router;
}

const _AnimationInitial: React.FC<IAnimationInitialProps> = props => {
	const { children, router } = props;

	return (
		<AnimatePresence>
			<motion.div
				key={router.route}
				initial='pageInitial'
				animate='pageAnimation'
				exit='pageExit'
				className='dark:bg-red'
				variants={motionVariableAnimation}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export const AnimationInitial = React.memo(_AnimationInitial);
