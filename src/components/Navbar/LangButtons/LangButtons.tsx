import { Lang } from '../../../lib/types';
import { Wrapper, Button } from './styles';

interface LangButtonsProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LangButtons = ({ setLang }: LangButtonsProps) => {
  return (
    <Wrapper>
      <Button onClick={() => setLang('jp')}>
        <div>
          <img src='/images/jp.png' alt='jp' />
        </div>
      </Button>

      <Button onClick={() => setLang('en')}>
        <div>
          <img src='/images/us.png' alt='us' />
        </div>
      </Button>
    </Wrapper>
  );
};

export default LangButtons;
