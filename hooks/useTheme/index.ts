import type { ISetThemes, TTheme } from '@/types';
import { useEffect, useState } from 'react';

const defaultThemes = () => {
	if (typeof window !== 'undefined') {
		const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
		return isDarkTheme ? 'dark' : 'light';
	}
};

const getThemes = () => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('app-theme');
	}
};

const setThemes = (props: ISetThemes) => {
	const { value } = props;

	if (typeof window !== 'undefined') {
		localStorage.setItem('app-theme', value);
	}
};

export const useTheme = () => {
	const [theme, setTheme] = useState(`${getThemes() || defaultThemes()}`);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme as TTheme);
		setThemes(theme as unknown as ISetThemes);
	}, [theme]);

	return { theme, setTheme };
};
