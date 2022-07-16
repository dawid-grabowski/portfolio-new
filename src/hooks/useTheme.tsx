import { useState, useContext, createContext, ReactNode } from 'react';
import { themeModes } from '../enums/themeModes';

interface IReactChildren {
	children: ReactNode;
}

interface IThemeContext {
	currentTheme: string;
	handleThemeChange?: () => void;
}

const ThemeContext = createContext<IThemeContext>({ currentTheme: 'dark' });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: IReactChildren) => {
	const [currentTheme, setCurrentTheme] = useState('dark');

	const handleThemeChange = () => {
		currentTheme === themeModes.light ? setCurrentTheme('dark') : setCurrentTheme('light');
	};

	return <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>{children}</ThemeContext.Provider>;
};
