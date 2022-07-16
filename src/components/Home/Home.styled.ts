import styled from 'styled-components';
import { themeModes } from '../../enums/themeModes';
import { IThemeProps } from '../../interface/ITheme';

export const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#171717' : '#faf8ff')};
	color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
	transition: 0.3s background-color ease-out, 0.3s color ease-out;
`;
