import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <p>
        &copy;{year} <span>Kemmei</span>
      </p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
