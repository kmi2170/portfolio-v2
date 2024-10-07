import Image from "next/image";
import { Lang } from "../../../lib/types";
import { Wrapper, Button } from "./styles";

interface LangButtonsProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LangButtons = ({ setLang }: LangButtonsProps) => {
  return (
    <Wrapper>
      <Button onClick={() => setLang("jp")}>
        <Image src="/images/jp.png" width={50} height={50} alt="jp" />
      </Button>

      <Button onClick={() => setLang("en")}>
        <Image src="/images/us.png" width={50} height={50} alt="us" />
      </Button>
    </Wrapper>
  );
};

export default LangButtons;
