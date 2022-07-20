import styled from 'styled-components';
import { themeModes } from '../enums/themeModes';

interface IThemeProps {
	currentTheme: string;
}

export const PageWrapper = styled.div`
	background-color: ${({ currentTheme }: IThemeProps) =>
		currentTheme === themeModes.dark ? '#171717' : 'hsl(210, 36%, 96%)'};
	color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? 'hsl(209, 61%, 16%)' : '#faf8ff')};

	transition: 0.3s background-color ease-out, 0.3s color ease-out;
`;
