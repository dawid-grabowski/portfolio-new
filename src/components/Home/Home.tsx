import { HomeWrapper } from './Home.styled';
import AboutMe from './AboutMe/AboutMe';
import Options from './Options/Options';
import { useTheme } from '../../hooks/useTheme';

const Home = () => {
	const { currentTheme } = useTheme();

	return (
		<HomeWrapper currentTheme={currentTheme}>
			<AboutMe />
			<Options />
		</HomeWrapper>
	);
};

export default Home;
