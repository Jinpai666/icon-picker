import styled from "styled-components";

export const Modal = styled.div`
  padding-top: 40px;
  font-family: 'Lato', sans-serif;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  background:#dbd3dc;
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h2{
    font-size: 54px;
    margin-bottom: 20px;
  }
  span{
    font-size: 80px;
    color: #839995;
  }
`