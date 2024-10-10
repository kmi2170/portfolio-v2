// import Image from "next/image";
import { Lang } from "../../../lib/types";
import { Button } from "./styles";
import { Container, Text } from "../../common-styles";
import { theme } from "../../../styles/globalStyles";

interface LangButtonsProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LangButtons = ({ setLang }: LangButtonsProps) => {
  const lightBlue = theme.colors.lightBlue;

  return (
    <Container direction="row" gap={1}>
      <Button onClick={() => setLang("jp")} color={lightBlue}>
        <Text fontSize={1} fontWeight={600} primary={lightBlue}>
          JP
        </Text>
      </Button>

      <Button onClick={() => setLang("en")} color={lightBlue}>
        <Text fontSize={1} fontWeight={600} primary={lightBlue}>
          EN
        </Text>
      </Button>
    </Container>
  );
};

export default LangButtons;
