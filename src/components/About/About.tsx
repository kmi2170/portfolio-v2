import { useEffect, useState } from "react";
import styled from "styled-components"
import { client, urlFor } from "../../lib/sanity";
import { AppWrapper, MotionWrapper } from "../../wrapper";

interface DataAbout {
  en: string,
  jp: string,
}

const About = () => {
  const [about, setAbout] = useState<DataAbout[]>([])

  useEffect(() => {
    const query = '*[_type == "about"]'

    client.fetch(query)
      .then((data) => { setAbout(data) })
  }, [])

  console.log(about);


  return (
    <Wrapper>
      <Title>
        About
      </Title>

      <Description>
        {about?.length && about[0]['en']}
      </Description>

      <Description>
        {about?.length && about[0]['jp']}
      </Description>
    </Wrapper>
  )
}

export default AppWrapper(MotionWrapper(About), 'about')

const Wrapper = styled.div`
  padding: 3rem;
  font-family: 'M PLUS Rounded 1c';
`

const Title = styled.h2`
`

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.3rem;
`
