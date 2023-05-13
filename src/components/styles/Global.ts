import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  body{
    position: relative;
    background: #dbd3dc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`