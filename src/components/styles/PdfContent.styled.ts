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
    border: none;
    outline: none;
    padding: 5px;
    font-weight: 700;


    &:first-child {
      background-color: transparent;
      text-align: center;
      font-size: 22px;
      margin-bottom: 30px;
    }

    &:nth-child(2) {
      background: #f7f3f8;
    }

    &:nth-child(3) {
      font-size: 10px;
      font-style: italic;
      width: 100%;

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