import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './utils/theme/themes';
import { themeModes } from './enums/themeModes';
import Navbar from './components/Navbar/Navbar';
import Options from './components/Options/Options';

const App = () => {
	const [currentTheme, setCurrentTheme] = useState('light');

	const handleThemeChange = () => {
		currentTheme === themeModes.light ? setCurrentTheme('dark') : setCurrentTheme('light');
	};

	return (
		<ThemeProvider theme={currentTheme === themeModes.light ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Navbar />
			<Options handleThemeChange={handleThemeChange} currentTheme={currentTheme} />
		</ThemeProvider>
	);
};

export default App;
