import styled from "styled-components";

const ComponentWrapper = styled.section<{
  padding?: number;
  maxWidth?: number;
}>`
  padding: ${({ padding = 0 }) => padding + "rem"};
  max-width: ${({ maxWidth = 1400 }) => maxWidth + "px"};
`;

export default ComponentWrapper;
