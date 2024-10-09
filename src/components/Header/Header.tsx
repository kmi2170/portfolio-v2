import React from "react";
import { motion } from "framer-motion";
import {
  Wrapper,
  Profile,
  ImageContainer,
  ImageGrid,
  StyledImage,
} from "./styles";
import { Text } from "../common-styles";
import { theme } from "../../styles/globalStyles";

const Header = () => {
  const blue = theme.colors.blue;
  const green = theme.colors.green;
  const red = theme.colors.red;
  const alexBush = theme.fontFamily.alexBrush;

  return (
    <Wrapper>
      <motion.div
        whileInView={{ y: [0, 0], opacity: [0.2, 1] }}
        transition={{ duration: 0.75, delay: 0.25, ease: "easeInOut" }}
      >
        <ImageContainer>
          <ImageGrid>
            <StyledImage
              // src="/images/portfolio_top_bg_image_1.png"
              // src="/images/seattle2.jpg"
              opacity={0.25}
              src="/images/mountain_silhouette.png"
              alt="background city and mountain"
              fill
            />
          </ImageGrid>
        </ImageContainer>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0.5, 1] }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        <Profile>
          <Text
            as="h1"
            fontFamily={alexBush}
            fontSize={2.5}
            fontWeight={600}
            secondary={blue}
            paddingLeft={1}
          >
            <span>KH&apos;s</span>&nbsp; Portfolio
          </Text>

          <Text
            as="h2"
            fontSize={1.5}
            fontWeight={600}
            secondary={blue}
            align="center"
          >
            I&apos;m <span>Kemmei</span> Hamada
          </Text>

          <Text
            as="h2"
            fontSize={1.5}
            fontWeight={600}
            secondary={blue}
            tertiary={green}
            align="right"
            paddingRight={1.5}
          >
            Freelance <span>Programmer</span> / <span>Web Developer</span>
          </Text>

          <Text
            as="h2"
            fontSize={1.5}
            fontWeight={600}
            secondary={red}
            align="center"
          >
            <span>Welcome to My Portfolio</span>
          </Text>
        </Profile>
      </motion.div>
    </Wrapper>
  );
};

export default React.memo(Header);
