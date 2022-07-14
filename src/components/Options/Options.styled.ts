import styled from 'styled-components';

interface IOptionsWrapperProps {
	currentTheme: string;
}

export const OptionsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	position: absolute;
	top: 50%;
	right: 0;
	width: 8rem;
	height: 8rem;

	button {
		background: none;
		border: 1px solid ${(props: IOptionsWrapperProps) => (props.currentTheme === 'dark' ? '#171717' : '#faf8ff')};
		color: ${(props: IOptionsWrapperProps) => (props.currentTheme === 'dark' ? '#171717' : '#faf8ff')};
		height: 45%;
		width: 45%;
		transition: 0.3s background-color ease-out, 0.3s color ease-out;
		cursor: pointer;
	}

	button:hover {
		background-color: ${(props: IOptionsWrapperProps) => (props.currentTheme === 'dark' ? '#171717' : '#faf8ff')};
		color: ${(props: IOptionsWrapperProps) => (props.currentTheme === 'dark' ? '#faf8ff' : '#171717')};
	}
`;
