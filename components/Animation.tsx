import { motion } from 'framer-motion';
import { animationProps } from '../type';

const Animation = ({ children, delay = 0.3, classN = '' }: animationProps) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				delay: delay,
				y: { type: 'spring', stiffness: 100 },
				default: { duration: 0.8 },
			}}
			style={{ transition: 'all 0.5 ease', width: '100%' }}
			className={classN}
		>
			{children}
		</motion.div>
	);
};

export default Animation;
