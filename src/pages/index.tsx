// import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
// import FaLinkedin from 'react-icons/lib/fa/linkedin';
// import FaTwitter from 'react-icons/lib/fa/twitter';
// import FaPinterest from 'react-icons/lib/fa/pinterest-square';
// import FaInstagram from 'react-icons/lib/fa/instagram';

// import FaCheck from "react-icons/lib/fa/FaCheck";
// import { FaCheck } from "react-icons/fa/index";
// import  FaCheck  from "react-icons/fa/index";

// import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { client } from '../lib/sanity';
import styled from 'styled-components';

import { Navbar, Header, Projects, About, Skills, Footer } from '../components';
import { DataAbout, DataProject, DataSkills, Lang } from '../lib/types';
import { data } from '../assets/projects';
import { useState } from 'react';

// const Home: NextPage = ({ dataAbout, dataSkills }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Home: NextPage = ({
  dataAbout,
  dataProjects,
  dataSkills,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [lang, setLang] = useState<Lang>('jp');

  return (
    <Wrapper>
      <Navbar setLang={setLang} />
      <Header />
      <Projects projects={dataProjects} lang={lang} />
      <About about={dataAbout} lang={lang} />
      <Skills skills={dataSkills} />
    </Wrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // export const getStaticProps: GetStaticProps = async () => {
  const query_about = '*[_type == "about"]';
  const query_skills = '*[_type == "skills"]';

  const [dataAbout, dataSkills] = await Promise.all<
    [DataAbout[], DataSkills[]]
  >([client.fetch(query_about), client.fetch(query_skills)]);

  // const dataAbout = null;
  // const dataSkills = [];

  const dataProjects: DataProject[] = data;

  return {
    props: { dataAbout, dataProjects, dataSkills },
    // revalidate: 3600,
    // revalidate: 86400,
  };
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;
