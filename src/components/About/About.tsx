import { AppWrapper, MotionWrapper } from "../../wrapper";
import { DataAbout, Lang } from "../../lib/types";
import { Wrapper, Card, Title, Description } from "./styles";
import { about } from "../../assets/about";

interface AboutProps {
  about: DataAbout[];
  lang: Lang;
}

// const About = ({ about, lang }: AboutProps) => {
const About = ({ lang }: AboutProps) => {
  console.log("about", about);
  return (
    <Wrapper>
      <Card>
        <Title>
          About <span>Myself</span>
        </Title>

        <Description>{about?.profile ? about.profile : null}</Description>
        {/* <Description>{about?.length && about[0][lang]}</Description> */}
      </Card>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(About), "about", "white");
