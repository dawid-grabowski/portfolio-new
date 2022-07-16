import { useTheme } from '../../../hooks/useTheme';
import { AboutMeWrapper } from './AboutMe.styled';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const AboutMe = () => {
	const { currentTheme } = useTheme();
	return (
		<AboutMeWrapper currentTheme={currentTheme}>
			<h1>Hi, i'm Dawid</h1>
			<p>
				I'm 20 year old student from Poznan. I have started learning front-end development 3 years ago. At the moment, I
				am working as an Intern Front-End Developer at summ-it. I love programming because there are always new things
				to learn and there are no limits in terms of what you can do.
			</p>
			<a href='#info'>
				read more <FaArrowAltCircleDown />
			</a>
		</AboutMeWrapper>
	);
};

export default AboutMe;
