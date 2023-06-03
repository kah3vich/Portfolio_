import { useHasMounted } from '@/app/hooks/useHasMounted';
import { useTheme } from '@/app/hooks/useTheme';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export const Theme = () => {
	const hasMounted = useHasMounted();
	const { theme, setTheme } = useTheme();

	const handleLightTheme = () => {
		setTheme('light');
	};

	const handleDarkTheme = () => {
		setTheme('dark');
	};

	return (
		<>
			{hasMounted && theme === 'dark' && (
				<button className='text-black' onClick={handleLightTheme}>
					<BsSun />
				</button>
			)}

			{hasMounted && theme !== 'dark' && (
				<button className='text-black' onClick={handleDarkTheme}>
					<BsMoonStars />
				</button>
			)}
		</>
	);
};
