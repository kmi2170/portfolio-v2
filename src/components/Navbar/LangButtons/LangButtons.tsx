import styled from 'styled-components';

import { Lang } from '../../../lib/types';

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

const Wrapper = styled.div``;

const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin-right: 20px;

  border: none;
  &:hover {
    cursor: pointer;
  }

  div {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    background-color: lightgreen;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
