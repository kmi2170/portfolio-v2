import styled from "styled-components";
import { NavigationDots } from "../components/";

const AppWrapper = (
  Component: React.ComponentType<{}>,
  idName: string,
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

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
`

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
