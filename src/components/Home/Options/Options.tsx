import { OptionsWrapper } from './Options.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faLanguage, faSun } from '@fortawesome/free-solid-svg-icons';
import { themeModes } from '../../../enums/themeModes';
import { useTheme } from '../../../hooks/useTheme';

const Options = () => {
	const { currentTheme, handleThemeChange } = useTheme();

	return (
		<OptionsWrapper currentTheme={currentTheme}>
			<button onClick={handleThemeChange}>
				<FontAwesomeIcon icon={currentTheme === themeModes.dark ? faMoon : faSun} />
			</button>
			<button>
				<FontAwesomeIcon icon={faLanguage} />
			</button>
		</OptionsWrapper>
	);
};

export default Options;
