import styled from 'styled-components';
import { themeModes } from '../../../enums/themeModes';
import { IThemeProps } from '../../../interface/ITheme';

export const AboutMeWrapper = styled.div`
	position: relative;
	max-width: 40rem;
	line-height: 1.9;
	border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
	border-radius: 5px;
	padding: 3rem 5rem;
	transition: 0.3s border ease-out;
	z-index: 4;

	&::before {
		content: '';
		position: absolute;
		top: 23px;
		left: -23px;
		border: 2px solid #9013fe;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	h1 {
		font-size: 3.6rem;
		z-index: 4;
		cursor: default;
	}

	p {
		font-size: 1.6rem;
		margin: 10px 0 20px 0;
		z-index: 4;
		cursor: default;
	}

	a {
		padding: 10px 20px;
		background: none;
		border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#171717' : '#faf8ff')};
		border-bottom: 1px solid
			${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
		font-size: 1.2rem;
		color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
		text-decoration: none;
		z-index: 4;
		cursor: pointer;
		transition: 0.3s border ease-out, 0.3s border-bottom ease-out, 0.3s color ease-out;
	}

	a:hover {
		border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
	}
`;
