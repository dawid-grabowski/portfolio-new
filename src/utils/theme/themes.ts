import { createGlobalStyle } from 'styled-components';

interface ITheme {
	body: string;
	fontColor: string;
}

export const lightTheme: ITheme = {
	body: '#171717',
	fontColor: '#faf8ff',
};

export const darkTheme: ITheme = {
	body: '#faf8ff',
	fontColor: '#171717',
};

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
    transition: .3s background-color ease-out, .3s color ease-out;

    ul li {
      color: ${props => props.theme.fontColor};
    }
  }
`;
