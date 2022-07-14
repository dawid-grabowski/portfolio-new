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
	background-color: ${(props: IThemeProps) => (props.currentTheme === themeModes.dark ? '#171717' : '#faf8ff')};
	color: ${(props: IThemeProps) => (props.currentTheme === themeModes.light ? '#171717' : '#faf8ff')};
	transition: 0.3s background-color ease-out, 0.3s color ease-out;

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
			color: ${(props: IThemeProps) => (props.currentTheme === themeModes.light ? '#171717' : '#faf8ff')};
			transition: 0.3s color ease-out;
		}

		a:hover {
			text-decoration: underline;
		}
	}
`;
