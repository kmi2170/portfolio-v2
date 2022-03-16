import { AppWrapper, MotionWrapper } from '../../wrapper';
import { DataAbout, Lang } from '../../lib/types';
import { Wrapper, Card, Title, Description } from './styles';

interface AboutProps {
  about: DataAbout[];
  lang: Lang;
}

const About = ({ about, lang }: AboutProps) => {
  return (
    <Wrapper>
      <Card>
        <Title>
          About <span>Myself</span>
        </Title>

        <Description>{about?.length && about[0][lang]}</Description>
      </Card>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(About), 'about', 'white');
