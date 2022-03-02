import styled from "styled-components"

const Footer = () => {
  const year = (new Date).getFullYear()

  return (
    <Wrapper>
      <p>
        &copy;{year} Kemmei. All rights reserved.
      </p>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  margin-bottom: 1rem;
  font-family: 'M PLUS Rounded 1c';
  text-align: center;

`
