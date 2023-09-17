import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../lib/sanity";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { skillSet } from "../../assets/skillSet";
import { DataSkills } from "../../lib/types";
import Footer from "../Footer/Footer";
import {
  Wrapper,
  Title,
  SubTitle,
  Container,
  Skill,
  Icon,
  Img,
  IconName,
} from "./styles";

const Skills = ({ skills }: { skills: DataSkills[] }) => {
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
                key={lang.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
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
                key={tool.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
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
                key={database.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
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
                transition={{ duration: 1.25, ease: "easeInOut" }}
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

export default React.memo(AppWrapper(Skills, "skills"));
