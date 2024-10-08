import styled from "styled-components";
import Pad from "./pad";

const ComponentWrapper = styled(Pad).attrs({ as: "section" })<{
  maxWidth?: number;
}>`
  max-width: ${({ maxWidth = 1400 }) => maxWidth + "px"};
`;

export default ComponentWrapper;
