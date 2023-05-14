import styled from "styled-components";

export const Header = styled.div`
  font-family: 'Lato',sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h1{
    margin-top: 40px;
    font-size:   70px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
    color: #999583;
    text-shadow: 4px 4px 6px #000;
    @media (max-width: 768px) {
      font-size: 50px;
    }
  }

  ol{
    list-style: decimal;
    padding-left: 10px;
  }

    `