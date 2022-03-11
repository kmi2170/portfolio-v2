import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { client } from "../../lib/sanity";
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { DataAbout } from '../../lib/types';

const About = ({ about }: { about: DataAbout[] }) => {
  // const [about, setAbout] = useState<DataAbout[]>([])

  // useEffect(() => {
  //   setAbout(data)
  // const query = '*[_type == "about"]'

  // client.fetch(query)
  //   .then((data) => { setAbout(data) })
  //   .catch((error) => console.error(error))
  // }, [data])

  // console.log(about);

  return (
    <Wrapper>
      <Card>
        <Title>
          About <span>Myself</span>
        </Title>

        <Description>{about?.length && about[0]['en']}</Description>

        <Description>{about?.length && about[0]['jp']}</Description>
      </Card>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(About), 'about');

const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: 'M PLUS Rounded 1c';
  /* width: 100vw; */
  /* height: 100vh; */
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.5);
`;

const Title = styled.h2`
  span {
    color: rgb(0, 0, 139);
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.3rem;
`;
