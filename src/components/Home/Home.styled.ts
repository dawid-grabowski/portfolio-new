import styled from 'styled-components';
import { themeModes } from '../../enums/themeModes';
import { IThemeProps } from '../../interface/ITheme';

export const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${(props: IThemeProps) => (props.currentTheme === themeModes.dark ? '#171717' : '#faf8ff')};
	color: ${(props: IThemeProps) => (props.currentTheme === themeModes.light ? '#171717' : '#faf8ff')};
	transition: 0.3s background-color ease-out, 0.3s color ease-out;
`;
