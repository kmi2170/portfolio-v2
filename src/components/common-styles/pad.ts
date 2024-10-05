import styled from "styled-components";

const Pad = styled.div<{
  padding?: number;
}>`
  padding: ${({ padding = 0 }) => padding + "rem"};
`;

export default Pad;
