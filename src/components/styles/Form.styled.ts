import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  background: #fff;
  button{
    max-width: 300px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    background-color: #999583;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    &:hover{
      color: #fff;
      border-color: #fff;
      transition: .6s;
      scale: 1.1;
    }
  }
`