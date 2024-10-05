import styled from "styled-components";
import { Text } from "../common-styles";

export const Tools = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  align-items: flex-start;
`;

// export const ToolWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 0.25rem;
//   justify-content: flex-start;
//   align-items: center;
// `;

export const Tool = styled(Text)<{
  color: string;
}>`
  /* font-weight: 600;
  color: black;
  font-size: 1.25rem; */
`;
