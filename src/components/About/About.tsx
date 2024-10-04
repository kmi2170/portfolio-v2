import React from "react";

import { MotionWrapper } from "../../wrapper";
import { Lang } from "../../lib/types";
import { about } from "../../assets/about";
import { Wrapper, Card, Description } from "./styles";
import { Title } from "../common/title";
import { theme } from "../../styles/globalStyles";

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
  const red = theme.colors.red;

  let text;
  switch (lang) {
    case "jp":
      text = profile?.jp;
      break;
    case "en":
      text = profile?.en;
  }

  return (
    <Wrapper id="about">
      <Title secondary={red}>
        About <span>Myself</span>
      </Title>
      <Card>
        <Description>{text ? text : <p>Temporary Unavailable</p>}</Description>
      </Card>
    </Wrapper>
  );
};

export default React.memo(MotionWrapper(About));
