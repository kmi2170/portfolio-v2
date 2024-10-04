import React from "react";
import { motion } from "framer-motion";
import { Wrapper, Profile, Title, Welcome, Role, MySelf } from "./styles";
import {
  ImageContainer,
  ImageGrid,
  StyledImage,
} from "../common/responsiveStyles";

const Header = () => {
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
              src="/images/mountain_silhouette.png"
              alt="background city and mountain"
              fill
              // style={{
              //   objectFit: "cover",
              // }}
            />
          </ImageGrid>
        </ImageContainer>
      </motion.div>

      <motion.div
        whileInView={{ x: [-0, 0], opacity: [0.5, 1] }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        <Profile>
          <Title>
            <span>KH&apos;s</span>&nbsp; Portfolio
          </Title>

          <MySelf>
            I&apos;m <span>Kemmei</span> Hamada
          </MySelf>

          <Role>
            Freelance <span>Programmer</span> / <span>Web Developer</span>
          </Role>

          <Welcome>Welcome to My Portfolio</Welcome>
        </Profile>
      </motion.div>
    </Wrapper>
  );
};

export default React.memo(Header);
