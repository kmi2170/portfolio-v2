import styled from 'styled-components';

// import { AppWrapper, MotionWrapper } from '../../wrapper';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <p>
        &copy;{year} <span>Kemmei</span>. All rights reserved.
      </p>
    </Wrapper>
  );
};

// export default AppWrapper(MotionWrapper(Footer), 'footer');
export default Footer;

const Wrapper = styled.div`
  margin-top: 4rem;
  padding-bottom: 2rem;
  font-family: 'M PLUS Rounded 1c';
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
