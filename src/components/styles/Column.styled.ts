import styled, {css} from "styled-components";

export const Column = styled.div< {isActive: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  ${(props) =>
          props.isActive &&
          css`
      opacity: 0.3; 
    `}
`