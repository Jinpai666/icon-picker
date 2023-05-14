import styled, {css} from "styled-components";

export const Column = styled.div< {active: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  ${(props) =>
          props.active &&
          css`
      opacity: 0.3; 
    `}
`