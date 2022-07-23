import styled from 'styled-components';
import { themeModes } from '../../enums/themeModes';
import { IThemeProps } from '../../interface/ITheme';

export const NavbarWrapper = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 7rem;
	font-size: 1.6rem;
	background-color: ${({ currentTheme }: IThemeProps) =>
		currentTheme === themeModes.dark ? '#171717' : 'hsl(210, 36%, 96%)'};
	color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
	transition: 0.3s background-color ease-out, 0.3s color ease-out;
	z-index: 101;

	span {
		cursor: default;
	}
`;

export const ListWrapper = styled.div`
	display: flex;
	list-style-type: none;

	li {
		margin-left: 2rem;

		a {
			text-decoration: none;
			color: ${({ currentTheme }: IThemeProps) =>
				currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)'};
			transition: 0.3s color ease-out;
		}

		a:hover {
			text-decoration: underline;
		}
	}
`;
