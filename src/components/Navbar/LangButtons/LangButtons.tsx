// import Image from "next/image";
import { Lang } from "../../../lib/types";
import { Button } from "./styles";
import { Container, Text } from "../../common-styles";
import { theme } from "../../../styles/globalStyles";

interface LangButtonsProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LangButtons = ({ setLang }: LangButtonsProps) => {
  const cyan = theme.colors.cyan;
  const lightBlue = theme.colors.lightBlue;
  const color = theme.colors.lightCyan;

  return (
    <Container direction="row" gap={1}>
      <Button onClick={() => setLang("jp")} color={color}>
        <Text fontSize={1} fontWeight={600} primary={color}>
          JP
        </Text>
      </Button>

      <Button onClick={() => setLang("en")} color={color}>
        <Text fontSize={1} fontWeight={600} primary={color}>
          EN
        </Text>
      </Button>
    </Container>
  );
};

export default LangButtons;
