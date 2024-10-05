import styled from "styled-components";

const ComponentWrapper = styled.div<{
  padding?: string;
}>`
  padding: ${({ padding = "2rem" }) => padding};
  /* background-color: ${({ theme }) => theme.colors.purple}; */

  display: flex;
  justify-content: center;
`;

export default ComponentWrapper;
