import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
 
  body{
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #dbd3dc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`