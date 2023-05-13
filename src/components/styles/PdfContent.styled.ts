import styled from "styled-components";

export const PdfContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  input {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    text-align: center;
    border: 1px solid #ccc;
    outline: none;
    padding: 5px;

    &:first-child {
      background-color:transparent;
      text-align: center;
      font-size: 30px;
      border: none;
      outline: none;
      font-weight: 700;
      margin-bottom: 30px;
    }
    &::placeholder {
      color: #839995;
      font-weight: 700;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: #000;
      font-weight: 700;
      opacity: 1;
    }
    &::-ms-input-placeholder {
      color: #000;
      font-weight: 700;
      opacity: 1;
    }
  }
`