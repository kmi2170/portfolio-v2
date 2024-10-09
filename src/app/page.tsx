"use client";

import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import {
  Navbar,
  Header,
  Projects,
  About,
  Devtools,
  Footer,
} from "../components";
import { Lang } from "../lib/types";
import { theme } from "../styles/globalStyles";
import { projects } from "../assets/projects";

const Home: NextPage = () => {
  const [lang, setLang] = useState<Lang>("jp");

  return (
    <Wrapper>
      <Navbar setLang={setLang} />
      <Main>
        <Header />
        <Projects projects={projects} lang={lang} />
        <About lang={lang} />
        <Devtools />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  max-width: 1500px;
  /* background-color: ${theme.colors.purple}; */
`;
