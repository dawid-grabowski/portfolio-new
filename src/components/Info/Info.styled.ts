import styled from 'styled-components';
import { themeModes } from '../../enums/themeModes';
import { IThemeProps } from '../../interface/ITheme';

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	min-height: 100vh;
	width: 100%;
	color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
	transition: 0.3s color ease-out;

	.info__panel {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		width: 50%;

		div {
			text-align: left;
		}

		h1 {
			position: relative;
			font-size: 3.6rem;
			margin-bottom: 2rem;
			z-index: 1;
			cursor: default;
		}

		h1::after {
			content: '';
			position: absolute;
			top: -15px;
			left: -15px;
			border: 2px solid #9013fe;
			width: 230px;
			height: 70px;
			z-index: -1;
		}

		p {
			position: relative;
			font-size: 1.6rem;
			margin-bottom: 1rem;
			z-index: 1;
			cursor: default;
		}

		a {
			color: ${({ currentTheme }: IThemeProps) =>
				currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)'};
			text-decoration: none;
			transition: 0.3s color ease-out;
		}

		a:hover {
			text-decoration: underline;
		}
	}

	.info__separator {
		width: 1px;
		height: 60vh;
		background-color: ${({ currentTheme }: IThemeProps) =>
			currentTheme === themeModes.dark ? 'hsl(210, 36%, 96%)' : '#171717'};
		transition: 0.3s background-color ease-out;
	}
`;
