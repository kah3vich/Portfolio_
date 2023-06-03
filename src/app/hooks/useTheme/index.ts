import { isServer } from '@/app/constants';
import { useEffect, useState } from 'react';
import type { TSetThemesProps, TThemes } from './types';

const defaultThemes = (): TThemes => {
	if (!isServer) {
		const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
		return isDarkTheme ? 'dark' : 'light';
	}

	return 'dark';
};

const getThemes = (): TThemes => {
	if (!isServer) {
		return localStorage.getItem('app-theme') === 'light' ? 'light' : 'dark';
	}

	return 'dark';
};

const setThemes = ({ value }: TSetThemesProps) => {
	if (!isServer) {
		localStorage.setItem('app-theme', value || 'dark');
	}
};

const removeThemes = () => {
	if (!isServer) {
		localStorage.removeItem('app-theme');
	}
};

export const useTheme = () => {
	const [theme, setTheme] = useState<TThemes>(getThemes() || defaultThemes());

	useEffect(() => {
		switch (theme) {
			case 'dark':
				document.documentElement.classList.add('dark');
				setThemes({
					value: 'dark',
				});
				break;
			case 'light':
				document.documentElement.classList.remove('dark');
				setThemes({
					value: 'light',
				});
				break;
			default:
				removeThemes();
				break;
		}
	}, [theme]);

	return { theme, setTheme };
};

// const [theme, setTheme] = useState(null);

// useEffect(() => {
// 	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 		setTheme('dark');
// 	} else {
// 		setTheme('light');
// 	}
// }, []);

// useEffect(() => {
// 	if (theme === 'dark') {
// 		document.documentElement.classList.add('dark');
// 	} else {
// 		document.documentElement.classList.remove('dark');
// 	}
// }, [theme]);

// const handleThemeSwitch = () => {
// 	setTheme(theme === 'dark' ? 'light' : 'dark');
// };
