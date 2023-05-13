import styled from "styled-components";

export const PdfContent = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  input {
    font-family: 'Lato', sans-serif;
    text-align: center;
    border: none;
    outline: none;
    padding: 10px 0;
    font-weight: 700;


    &:first-child {
      background-color: transparent;
      text-align: center;
      font-size: 22px;
      margin-bottom: 30px;
    }

    &:nth-child(2) {
      background: #f7f3f8;
      font-size: 16px;
    }

    &:nth-child(3) {
  font-size: 14px;
      line-height:5px;
      width: 100%;
      font-style: italic;
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