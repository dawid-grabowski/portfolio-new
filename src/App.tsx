import Page from './components/Page';
import { ThemeProvider } from './hooks/ThemeContext';

const App = () => {
	return (
		<ThemeProvider>
			<Page />
		</ThemeProvider>
	);
};

export default App;
