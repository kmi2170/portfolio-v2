import React from "react";
import { motion } from "framer-motion";
import { Wrapper, Card, Title, Welcome, Role, MySelf } from "./styles";
import {
  ImageContainer,
  ImageGrid,
  StyledImage,
} from "../common/responsiveStyles";

const Header = () => {
  return (
    <Wrapper>
      <motion.div
        whileInView={{ y: [-50, 0], opacity: [0.2, 1] }}
        transition={{ duration: 0.75, delay: 0.25, ease: "easeInOut" }}
      >
        <ImageContainer>
          <ImageGrid>
            <StyledImage
              src="/images/portfolio_top_bg_image_1.png"
              // src="/images/seattle2.jpg"
              // src="/images/mountain_silhouette.png"
              alt="background city and mountain"
              fill
              priority
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
        <Card>
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
        </Card>
      </motion.div>
    </Wrapper>
  );
};

export default React.memo(Header);
// const bgColor = 'rgba(144,238,144,0.25)';
// const bgColor = 'rgba(211,211,211,0.6)';
// export default React.memo(AppWrapper(Header, "home"));
