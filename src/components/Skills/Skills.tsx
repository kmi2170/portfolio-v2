import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../lib/sanity';
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { skillSet } from '../../assets/skillSet';
import { DataSkills } from '../../lib/types';
import Footer from '../Footer/Footer';

const Skills = ({ skills }: { skills: DataSkills[] }) => {
  // const [skills, setSkills] = useState<DataSkills[]>([])

  // useEffect(() => {
  // const query = '*[_type == "skills"]'

  // client.fetch(query)
  //   .then((data) => { setSkills(data) })
  //   .catch((error) => console.error(error))
  // }, [])

  // console.log(skills);

  return (
    <Wrapper>
      <Title>Skills and Experience</Title>

      <SubTitle>Languages</SubTitle>
      <Container>
        {skills.length &&
          skillSet?.languages.map((lang) => {
            const skillIcon = skills.filter(
              (skill) => skill.iconName === lang.iconName
            );
            const url = urlFor(skillIcon[0]?.icons?.original);
            const iconName = skillIcon[0].iconName;

            return (
              <motion.div
                key={iconName}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25 }}
              >
                <Skill>
                  <Icon>
                    <Img src={url} alt={iconName} />
                  </Icon>
                  <IconName>{skillIcon[0].name}</IconName>
                </Skill>
              </motion.div>
            );
          })}
      </Container>

      <SubTitle>Tools</SubTitle>
      <Container>
        {skills.length &&
          skillSet?.tools.map((tool) => {
            const skillIcon = skills.filter(
              (skill) => skill.iconName === tool.iconName
            );
            const url = urlFor(skillIcon[0]?.icons?.original);
            const iconName = skillIcon[0].iconName;

            return (
              <motion.div
                key={iconName}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25 }}
              >
                <Skill key={iconName}>
                  <Icon>
                    <Img src={url} alt={iconName} />
                  </Icon>
                  <IconName>{skillIcon[0].name}</IconName>
                </Skill>
              </motion.div>
            );
          })}
      </Container>

      <SubTitle>Databases/CMS</SubTitle>
      <Container>
        {skills.length &&
          skillSet?.databases.map((database) => {
            const skillIcon = skills.filter(
              (skill) => skill.iconName === database.iconName
            );
            const url = urlFor(skillIcon[0].icons.original);
            const iconName = skillIcon[0].iconName;

            return (
              <motion.div
                key={iconName}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25 }}
              >
                <Skill key={iconName}>
                  <Icon>
                    <Img src={url} alt={iconName} />
                  </Icon>
                  <IconName>{skillIcon[0].name}</IconName>
                </Skill>
              </motion.div>
            );
          })}
      </Container>

      <SubTitle>Others</SubTitle>
      <Container>
        {skills.length &&
          skillSet?.others.map((other) => {
            return (
              <motion.div
                key={other.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25 }}
              >
                <Skill key={other.name}>
                  <IconName>{other.name}</IconName>
                </Skill>
              </motion.div>
            );
          })}
      </Container>

      <Footer />
    </Wrapper>
  );
};
// console.log(urlFor(skill.icons.original));

export default AppWrapper(MotionWrapper(Skills), 'skills');

const Wrapper = styled.div`
  padding: 2rem;
  font-family: 'M PLUS Rounded 1c';
  width: 100%;
  height: 100vh;
`;

const Title = styled.h2`
  span {
    color: rgb(0, 0, 139);
  }
`;

const SubTitle = styled.h3`
  margin-left: 1rem;
`;

const Container = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Skill = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Icon = styled.div`
  padding: 0.15rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  background-color: rgba(240, 240, 240, 0.7);
  box-shadow: 0 4px 5px rgba(168, 168, 168, 0.5);
  /* background-color: lightpink; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconName = styled.p`
  word-wrap: normal;
  text-align: center;
  font-size: 1.25rem;
`;
