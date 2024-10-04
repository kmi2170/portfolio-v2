import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { client } from "../lib/sanity";
import styled from "styled-components";

import {
  Navbar,
  Header,
  Projects,
  About,
  Devtools,
  Footer,
} from "../components";
import { DataAbout, DataProject, DataSkills, Lang } from "../lib/types";
import { useState } from "react";
import { theme } from "../styles/globalStyles";
import { projects } from "../assets/projects";

// const Home: NextPage = ({
//   dataAbout,
//   dataProjects,
//   dataSkills,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const Home: NextPage = () => {
  const [lang, setLang] = useState<Lang>("jp");

  return (
    <Wrapper>
      <Navbar setLang={setLang} />
      <Header />
      {/* <Projects projects={projects} lang={lang} /> */}
      <About lang={lang} />
      <Devtools />
      <Footer />
    </Wrapper>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   // export const getStaticProps: GetStaticProps = async () => {
//   const query_about = '*[_type == "about"]';
//   const query_skills = '*[_type == "skills"]';
//   const [dataAbout, dataSkills] = await Promise.all<
//     [DataAbout[], DataSkills[]]
//   >([client.fetch(query_about), client.fetch(query_skills)]);

//   // const dataAbout = null;
//   // const dataSkills = [];

//   const dataProjects: DataProject[] = data;

//   return {
//     props: { dataAbout, dataProjects, dataSkills },
//     // revalidate: 86400,
//   };
// };

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: auto;
`;

const Main = styled.div`
  display: grid;
  /* background-color: ${theme.colors.purple}; */
`;
