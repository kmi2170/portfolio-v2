import React from "react";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { Lang } from "../../lib/types";
import { about } from "../../assets/about";
import { Container, Card, Title, Description } from "./styles";

interface AboutProps {
  lang?: Lang;
}

type ProfileType = {
  jp?: string;
  en?: string;
};

const About = (props: AboutProps) => {
  const { lang } = props;
  const profile = about?.profile as ProfileType;

  let text;
  switch (lang) {
    case "jp":
      text = profile?.jp;
      break;
    case "en":
      text = profile?.en;
  }

  return (
    <Container>
      <Card>
        <Title>
          About <span>Myself</span>
        </Title>

        <Description>{text ? text : <p>Temporary Unavailable</p>}</Description>
      </Card>
    </Container>
  );
};

export default React.memo(AppWrapper(MotionWrapper(About), "about", "white"));
