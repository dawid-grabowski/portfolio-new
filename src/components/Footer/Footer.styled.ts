import styled from 'styled-components';
import { themeModes } from '../../enums/themeModes';
import { IThemeProps } from '../../interface/ITheme';

export const FooterWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
	padding: 2rem 0;
	transition: 0.3s color ease-out;

	p {
		font-size: 1.6rem;
		cursor: default;
	}

	a {
		color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
		transition: 0.3s color ease-out;
	}
`;
