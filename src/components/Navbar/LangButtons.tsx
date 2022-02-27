import styled from "styled-components"

const LangButtons = () => {
  return (
    <>
      <Button>
        EN
      </Button>
      <Button>
        JP
      </Button>
    </>
  )
}

export default LangButtons

const Wrapper = styled.div`
`
const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: inherit;
  margin: 0 0.25rem;
`
