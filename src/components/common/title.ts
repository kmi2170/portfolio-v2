import styled from "styled-components";

const Title = styled.h2<{
  primary?: string;
  secondary?: string;
}>`
  color: ${({ primary = "black" }) => primary};

  span {
    color: ${({ secondary = "black" }) => secondary};
    //     margin-left: 0.5rem;
    //     margin-right: 0.5rem;
    //     color: ${({ theme }) => theme.colors.blue};
  }
`;

export default Title;
