import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;
