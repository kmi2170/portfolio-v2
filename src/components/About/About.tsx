import React from "react";

import { MotionWrapper } from "../../wrapper";
import { Lang } from "../../lib/types";
import { about } from "../../assets/about";
import { Card, Description } from "./styles";
import { theme } from "../../styles/globalStyles";
import { ComponentWrapper, Text } from "../common";

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
    <ComponentWrapper id="about">
      <Text secondary={red}>
        About <span>Myself</span>
      </Text>
      <Card>
        <Description>{text ? text : <p>Temporary Unavailable</p>}</Description>
      </Card>
    </ComponentWrapper>
  );
};

export default React.memo(MotionWrapper(About));
