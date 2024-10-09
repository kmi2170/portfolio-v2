import styled from "styled-components";
import { Text } from "../common-styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Text as="p">
        &copy;{year} <span>Kemmei</span>
      </Text>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;
`;
