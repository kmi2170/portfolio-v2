// import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
// import FaLinkedin from 'react-icons/lib/fa/linkedin';
// import FaTwitter from 'react-icons/lib/fa/twitter';
// import FaPinterest from 'react-icons/lib/fa/pinterest-square';
// import FaInstagram from 'react-icons/lib/fa/instagram';

// import FaCheck from "react-icons/lib/fa/FaCheck";
// import { FaCheck } from "react-icons/fa/index";
// import  FaCheck  from "react-icons/fa/index";

import type { NextPage } from 'next'
import styled from 'styled-components';
import { Navbar, Header, Projects, About, Skills, Footer } from "../components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  height: 100vh;
  max-width: 100vw;
`
