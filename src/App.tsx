import Page from './components/Page';
import { ThemeProvider } from './hooks/useTheme';

const App = () => {
	return (
		<ThemeProvider>
			<Page />
		</ThemeProvider>
	);
};

export default App;
