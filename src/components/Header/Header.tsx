import React from "react";
import { motion } from "framer-motion";
import {
  HeaderWrapper,
  Profile,
  ImageContainer,
  ImageGridLeft,
  StyledImage,
  ImageGridRight,
  RowContainer,
} from "./styles";
import { Text } from "../common-styles";
import { theme } from "../../styles/globalStyles";

const Header = () => {
  const blue = theme.colors.blue;
  const green = theme.colors.green;
  const red = theme.colors.red;
  const darkOrange = theme.colors.darkOrange;
  const alexBush = theme.fontFamily.alexBrush;

  return (
    <HeaderWrapper>
      <motion.div
        whileInView={{ y: [0, 0], opacity: [0.2, 1] }}
        transition={{ duration: 0.75, delay: 0.25, ease: "easeInOut" }}
      >
        <ImageContainer>
          {/* <ImageGridRight>
            <StyledImage
              opacity={0.5}
              src="/images/mountain_silhouette.png"
              alt="background city and mountain"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </ImageGridRight> */}
          <ImageGridLeft>
            <StyledImage
              opacity={0.99}
              // src="/images/mountain_silhouette.png"
              src="/images/top/town_mono_4.png"
              alt="background city and mountain"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </ImageGridLeft>
        </ImageContainer>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0.5, 1] }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        <Profile>
          <RowContainer row={2} span={1}>
            <Text
              as="h1"
              fontFamily={alexBush}
              fontSize={2.5}
              fontWeight={600}
              // primary="white"
              secondary={blue}
              paddingLeft={2}
            >
              <span>KH&apos;s</span>&nbsp; Portfolio
            </Text>
          </RowContainer>

          <RowContainer row={4} span={1}>
            <Text
              as="h2"
              fontSize={1.75}
              fontWeight={600}
              // primary="white"
              secondary={blue}
              align="right"
              paddingRight={5}
            >
              I&apos;m <span>Kemmei</span> Hamada
            </Text>
          </RowContainer>

          <RowContainer row={6} span={2}>
            <Text
              as="h2"
              fontSize={1.75}
              fontWeight={600}
              // primary="white"
              secondary={blue}
              tertiary={darkOrange}
              align="right"
              paddingRight={1.5}
            >
              <span>Programmer</span> / <span>Web Developer</span>
            </Text>
          </RowContainer>

          <RowContainer row={11} span={1}>
            <Text
              as="h2"
              fontSize={1.75}
              fontWeight={600}
              secondary={red}
              // secondary="rgba(59, 60, 54, 0.99)"
              align="center"
            >
              <span>Welcome to My Portfolio</span>
            </Text>
          </RowContainer>
        </Profile>
      </motion.div>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
