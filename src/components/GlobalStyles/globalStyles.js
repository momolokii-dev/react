import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;

}
h1,h2,h3,p{
  color: #383340;
}

`;

export default GlobalStyle;
