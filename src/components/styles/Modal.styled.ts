import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background:#ccc;
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-size: 54px;
    margin-bottom: 20px;
  }
  span{
    font-size: 100px;
    color: #839995;
  }
`