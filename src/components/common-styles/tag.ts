import styled from "styled-components";
import { theme } from "../../styles/globalStyles";

const Tag = styled.li<{
  isSelected?: boolean;
  fontSize?: number;
  clickable?: boolean;
}>`
  padding: 0.4rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
  border: 2px solid ${() => theme.colors.darkPurple};
  font-size: ${({ fontSize = 1 }) => fontSize + "rem"};
  font-weight: 600;

  &:hover {
    cursor: ${({ clickable = false }) => (clickable ? "pointer" : "default")};
  }

  color: ${({ isSelected = false }) =>
    isSelected ? "white" : theme.colors.darkPurple};
  background-color: ${({ isSelected = false }) =>
    isSelected ? theme.colors.darkPurple : "white"};
`;

export default Tag;
