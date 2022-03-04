import styled from "styled-components";
import { AiFillEye, AiFillGithub } from "react-icons/ai/index";
import { motion } from "framer-motion";
import { client, urlFor } from "../../lib/sanity";

import { AppWrapper, MotionWrapper } from "../../wrapper"

const Projects = () => {

  return (
    <Wrapper>
      <Title>
        My <span>Next.js</span> Projects
      </Title>
    </Wrapper>
  )
}

export default AppWrapper(MotionWrapper(Projects), 'projects')

const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: 'M PLUS Rounded 1c';
  /* width: 100vw; */
  /* height: 100vh; */
`
const Title = styled.h2`
  span {
    color: rgb(0,0,139);
  }
`
