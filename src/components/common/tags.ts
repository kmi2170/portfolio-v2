import styled from "styled-components";

const Tags = styled.div<{
  marginTop?: string;
  marginBottom?: string;
}>`
  margin-top: ${({ marginTop = "0rem" }) => marginTop};
  margin-bottom: ${({ marginBottom = "0rem" }) => marginBottom};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default Tags;
