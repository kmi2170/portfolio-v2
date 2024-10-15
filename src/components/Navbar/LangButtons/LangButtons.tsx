// import Image from "next/image";
import { Lang } from "../../../lib/types";
import { Button } from "./styles";
import { Container, Text } from "../../common-styles";
import { theme } from "../../../styles/globalStyles";

interface LangButtonsProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  color?: string;
}

const LangButtons = ({ setLang, color }: LangButtonsProps) => {
  const btnColor = color || "black";

  return (
    <Container direction="row" gap={1}>
      <Button onClick={() => setLang("jp")} color={btnColor}>
        <Text fontSize={1} fontWeight={600} primary={btnColor}>
          JP
        </Text>
      </Button>

      <Button onClick={() => setLang("en")} color={btnColor}>
        <Text fontSize={1} fontWeight={600} primary={btnColor}>
          EN
        </Text>
      </Button>
    </Container>
  );
};

export default LangButtons;
