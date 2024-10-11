import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import LangButtons from "./LangButtons/LangButtons";
import { Lang } from "../../lib/types";
import {
  NavWrapper,
  Ul,
  Li,
  Menu,
  SidebarWrapper,
  UlMenu,
  NavContentWrapper,
} from "./styles";
import { CloseIcon, MenuIcon2 } from "../../assets/icons";
import { Text } from "../common-styles";
import { theme } from "../../styles/globalStyles";

export const navItems = ["projects", "about", "devtools"];

interface NavbarProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ setLang }: NavbarProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const lightCyan = theme.colors.lightCyan;
  const blue = theme.colors.blue;
  const lightBlue = theme.colors.lightBlue;
  const alexBush = theme.fontFamily.alexBrush;

  return (
    <>
      <NavWrapper justify="center" align="center">
        <NavContentWrapper justify="between" align="center">
          <Link href="#home">
            <Text
              as="h2"
              fontSize={1.75}
              primary="white"
              secondary={lightCyan}
              fontFamily={alexBush}
              // fontFamily="Alex Brush"
              fontWeight={600}
              paddingLeft={1}
              marginTop={0.25}
            >
              <span>KH&apos;s</span> Portfolio
            </Text>
          </Link>

          <Ul justify="even" align="center">
            {navItems.map((item) => (
              <Li key={`link-${item}`}>
                <Link href={`#${item}`}>
                  <Text as="h2" primary="white" fontSize={1} fontWeight={600}>
                    {item.toUpperCase()}
                  </Text>
                </Link>
              </Li>
            ))}
            <Li key="lang-buttons">
              <LangButtons setLang={setLang} />
            </Li>
          </Ul>

          <Menu
            align="center"
            onClick={() => setToggle(true)}
            svgColor={lightBlue}
          >
            <MenuIcon2 />
          </Menu>
        </NavContentWrapper>
      </NavWrapper>

      {toggle && (
        <SidebarWrapper svgColor={blue}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50vw" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div onClick={() => setToggle(false)}>
              <CloseIcon size={40} />
            </div>
            <UlMenu as="ul" direction="column" justify="around" gap={3}>
              {navItems.map((item) => (
                <Li key={`link-menu-${item}`}>
                  <Link href={`#${item}`}>
                    <Text as="h2" fontSize={1} fontWeight={600}>
                      {item.toUpperCase()}
                    </Text>
                  </Link>
                </Li>
              ))}
              <LangButtons setLang={setLang} />
            </UlMenu>
          </motion.div>
        </SidebarWrapper>
      )}
    </>
  );
};

export default Navbar;
