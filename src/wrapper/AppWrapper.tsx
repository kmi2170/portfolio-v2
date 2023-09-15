import styled from "styled-components";
import { NavigationDots } from "../components/";

const AppWrapper = <P extends object>(Component: React.ComponentType<P>, idName: string, bgColor?: string) => {
  const WrappedComponent = (props: P) => (
    <Wrapper id={idName} bgColor={bgColor}>
      <SubWrapper>
        <Container>
          <Component {...props} />
        </Container>
        <NavigationDots activeItem={idName} />
      </SubWrapper>
    </Wrapper>
  );

  return WrappedComponent;
};

export default AppWrapper;

const Wrapper = styled.div<{ bgColor?: string }>`
  margin-top: 3rem;
  width: 100%;
  /* min-height: 100vh; */
  min-height: 75vh;
  display: flex;
  flex-direction: row;

  background-color: ${({ bgColor }) => bgColor && bgColor};

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 1;
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(247, 247, 247, 1) 50%, rgba(255, 255, 255, 1) 100%);
    /* background: rgb(238, 174, 202); */
    /* background: radial-gradient( */
    /*   circle, */
    /*   rgba(238, 174, 202, 1) 0%, */
    /*   rgba(148, 187, 233, 1) 100% */
    /* ); */
    /* background-image: linear-gradient( */
    /*   to right top, */
    /*   #d16ba5, */
    /*   #c085c8, */
    /*   #aa9edf, */
    /*   #9ab3e9, */
    /*   #98c5ea, */
    /*   #96cfed, */
    /*   #97d8ef, */
    /*   #9ce1ef, */
    /*   #8de8f3, */
    /*   #7eeef5, */
    /*   #6ef5f4, */
    /*   #5ffbf1 */
    /* ); */
  }
`;
/* background-image: ${({ bgImage }) => bgImage}; */
/* display: ${({ bgImage }) => bgImage ? 'block' : 'none'}; */

const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 4rem 2rem; */
`;

const Container = styled.div`
  flex: 1;
`;
