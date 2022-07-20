import styled from 'styled-components';
import { themeModes } from '../../../enums/themeModes';
import { IThemeProps } from '../../../interface/ITheme';

export const OptionsWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	width: 8rem;
	height: 8rem;

	button {
		background: none;
		border-radius: 4px;
		border: 1px solid ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : '#171717')};
		color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)')};
		height: 45%;
		width: 45%;
		transition: 0.3s background-color ease-out, 0.3s color ease-out, 0.3s border ease-out;
		cursor: pointer;
	}

	button:hover {
		background-color: ${({ currentTheme }: IThemeProps) =>
			currentTheme === themeModes.dark ? 'hsl(210, 36%, 96%)' : '#171717'};
		color: ${({ currentTheme }: IThemeProps) => (currentTheme === themeModes.dark ? 'hsl(209, 61%, 16%)' : '#faf8ff')};
	}
`;
