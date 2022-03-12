import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { client } from "../../lib/sanity";
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { DataAbout, Lang } from '../../lib/types';

interface AboutProps {
  about: DataAbout[];
  lang: Lang;
}

const About = ({ about, lang }: AboutProps) => {
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

        <Description>{about?.length && about[0][lang]}</Description>
      </Card>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(About), 'about', 'white');

const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: 'M PLUS Rounded 1c';
  width: 100%;
  margin-left: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.5);
  min-height: 60%;
  width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 2rem;

  span {
    color: rgb(0, 0, 139);
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.3rem;
`;
