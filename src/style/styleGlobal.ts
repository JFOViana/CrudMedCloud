import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

#root {
    width: 100%;
    height:100%;
    display:flex ;
    flex-direction:column ;
  }

button{
  cursor:pointer ;
}


  input, button, *{
      background:none;
      border:0;
  }


  html, body {
    min-height: 100%;
    height: 100%;
    scroll-behavior: smooth;
    background-color: #f7f7f7;
  }

  

`;
