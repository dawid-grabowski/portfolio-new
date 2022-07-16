import { PageWrapper } from './Page.styled';
import { useTheme } from '../hooks/useTheme';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Info from './Info/Info';

const Page = () => {
	const { currentTheme } = useTheme();

	return (
		<PageWrapper currentTheme={currentTheme}>
			<Navbar />
			<Home />
			<Info />
		</PageWrapper>
	);
};

export default Page;
