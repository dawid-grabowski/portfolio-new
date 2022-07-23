import styled from 'styled-components';
import { themeModes } from '../../enums/themeModes';
import { IThemeProps } from '../../interface/ITheme';

export const ContactWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
	transition: 0.3s color ease-out;

	.square-content {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 10;

		h1 {
			font-size: 7rem;
			margin-bottom: 2rem;
			text-transform: uppercase;
			cursor: default;
		}

		a {
			font-size: 2.2rem;
			margin-bottom: 1rem;
			text-decoration: none;
			color: ${({ currentTheme }: IThemeProps) =>
				currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)'};
			transition: 0.3s color ease-out;
		}

		a:hover {
			text-decoration: underline;
		}
	}

	.square {
		position: absolute;
		background-color: gray;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		height: 25rem;
		width: 25rem;
		opacity: 0.2;
		z-index: 5;
		transition: 0.3s background-color ease-out;
	}

	.inner-square {
		position: absolute;
		background-color: ${({ currentTheme }: IThemeProps) =>
		currentTheme === themeModes.dark ? '#171717' : 'hsl(210, 36%, 96%)'};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		height: 18rem;
		width: 18rem;
		z-index: 5;
		transition: 0.3s background-color ease-out;
	}

  .line {
		position: absolute;
		background-color: #9013FE;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		height: 28rem;
		width: 28rem;
		z-index: 3;
		transition: 0.3s background-color ease-out;
	}

	.line-square {
		position: absolute;
		background-color: ${({ currentTheme }: IThemeProps) =>
		currentTheme === themeModes.dark ? '#171717' : 'hsl(210, 36%, 96%)'};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		height: 27.8rem;
		width: 27.8rem;
		z-index: 3;
		transition: 0.3s background-color ease-out;
	}
`;
