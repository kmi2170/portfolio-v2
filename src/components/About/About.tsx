import { AppWrapper, MotionWrapper } from "../../wrapper";
import { DataAbout, Lang } from "../../lib/types";
import { Wrapper, Card, Title, Description } from "./styles";
import { about } from "../../assets/about";

interface AboutProps {
  about?: DataAbout[];
  lang?: Lang;
}

type ProfileType = {
  jp?: string;
  en?: string;
};

// const About = ({ about, lang }: AboutProps) => {
const About = ({ lang }: AboutProps) => {
  const _lang = lang || "jp";
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
    <Wrapper>
      <Card>
        <Title>
          About <span>Myself</span>
        </Title>

        <Description>{text ? text : null}</Description>
      </Card>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(About), "about", "white");
