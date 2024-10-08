// import Image from "next/image";
import { Lang } from "../../../lib/types";
import { Button } from "./styles";
import { Container, Text } from "../../common-styles";
import { theme } from "../../../styles/globalStyles";

interface LangButtonsProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LangButtons = ({ setLang }: LangButtonsProps) => {
  const blue = theme.colors.blue;

  return (
    <Container direction="row" gap={1}>
      <Button onClick={() => setLang("jp")}>
        <Text fontSize={1} fontWeight={600} primary={blue}>
          JP
        </Text>
        {/* <Image src="/images/jp.png" width={50} height={50} alt="jp" /> */}
      </Button>

      <Button onClick={() => setLang("en")}>
        <Text fontSize={1} fontWeight={600} primary={blue}>
          EN
        </Text>
        {/* <Image src="/images/us.png" width={50} height={50} alt="us" /> */}
      </Button>
    </Container>
  );
};

export default LangButtons;
