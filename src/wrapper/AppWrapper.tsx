import styled from "styled-components";
import { NavigationDots } from "../components/";

const AppWrapper = (
  Component: React.ComponentType<{}>,
  idName: string,
  // bgImage?: string
) => function HOC() {

  return (
    <Wrapper id={idName}>
      <SubWrapper>
        <Container>
          <Component />
        </Container>

        <NavigationDots activeItem={idName} />
      </SubWrapper>
    </Wrapper>
  )
}

export default AppWrapper

// const Wrapper = styled.div<{ bgImage?: string }>`
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* flex-direction: row; */

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    background-image: linear-gradient(to right top, #d16ba5, #c085c8, #aa9edf, #9ab3e9, #98c5ea, #96cfed, #97d8ef, #9ce1ef, #8de8f3, #7eeef5, #6ef5f4, #5ffbf1);
  }
`
/* background-image: ${({ bgImage }) => bgImage}; */
/* display: ${({ bgImage }) => bgImage ? 'block' : 'none'}; */

const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 4rem 2rem; */
`

const Container = styled.div`
  flex: 1;
`
