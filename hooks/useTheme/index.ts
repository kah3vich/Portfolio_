import { useEffect, useState } from 'react';

const defaultThemes = () => {
	if (typeof window !== 'undefined') {
		const isDarkTheme = window?.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		return isDarkTheme ? 'dark' : 'light';
	}
};

const getThemes = () => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('app-theme');
	}
};

type TSetThemesProps = string | undefined;

const setThemes = (value: TSetThemesProps) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('app-theme', value || 'dark');
	}
};

export const useTheme = () => {
	const [theme, setTheme] = useState(getThemes() || defaultThemes());

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme || 'dark');
		setThemes(theme || 'dark');
	}, [theme]);

	return { theme, setTheme };
};
