import styled from 'styled-components';
import { themeModes } from '../../../enums/themeModes';
import { IThemeProps } from '../../../interface/ITheme';

export const AboutMeWrapper = styled.div`
	max-width: 40rem;
	line-height: 1.9;
	border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
	border-radius: 5px;
	padding: 3rem 5rem;
	transition: 0.3s border ease-out;

	h1 {
		font-size: 3.6rem;
	}

	p {
		font-size: 1.6rem;
		margin: 10px 0 20px 0;
	}

	a {
		padding: 10px 20px;
		background: none;
		border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#171717' : '#faf8ff')};
		border-bottom: 1px solid
			${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
		font-size: 1.2rem;
		color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
		text-decoration: none;
		cursor: pointer;
		transition: 0.3s border ease-out, 0.3s border-bottom ease-out, 0.3s color ease-out;
	}

	a:hover {
		border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
	}
`;
