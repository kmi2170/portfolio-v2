import styled from "styled-components";

const Tags = styled.ul<{
  marginTop?: number;
  marginBottom?: number;
}>`
  margin-top: ${({ marginTop = 0 }) => marginTop + "rem"};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom + "rem"};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  list-style: none;
`;

export default Tags;
