import React from "react";

import { MotionWrapper } from "../../wrapper";
import { Lang } from "../../lib/types";
import { about } from "../../assets/about";
import { theme } from "../../styles/globalStyles";
import { ComponentWrapper, Pad, Text } from "../common-styles";

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
    <ComponentWrapper id="about" padding={1.5}>
      <Text as="h2" fontSize={1.5} fontWeight={600} secondary={red}>
        About <span>Myself</span>
      </Text>
      <Pad padding={1.5}>
        <Text as="p" fontSize={1.25} marginTop={1} marginBottom={2}>
          {text ? text : "Temporary Unavailable"}
        </Text>
      </Pad>
    </ComponentWrapper>
  );
};

export default React.memo(MotionWrapper(About));
