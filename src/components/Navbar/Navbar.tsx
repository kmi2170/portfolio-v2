import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import LangButtons from "./LangButtons/LangButtons";
import { Lang } from "../../lib/types";
import { NavWrapper, Ul, Li, Menu, SideBar, UlMenu } from "./styles";
import { CloseIcon, MenuIcon2 } from "../../assets/icons";
import { Text } from "../common-styles";
import { theme } from "../../styles/globalStyles";

export const navItems = ["projects", "about", "devtools"];

interface NavbarProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ setLang }: NavbarProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const blue = theme.colors.blue;

  return (
    <>
      <NavWrapper justify="between" align="center">
        <Link href="#home">
          <Text
            as="h2"
            fontSize={1.75}
            secondary={blue}
            fontFamily="Alex Brush"
            fontWeight={600}
            paddingLeft={1}
          >
            <span>KH&apos;s</span>Portfolio
          </Text>
        </Link>

        <Ul justify="even" align="center">
          {navItems.map((item) => (
            <Li key={`link-${item}`}>
              <Link href={`#${item}`}>
                <Text as="h2" fontSize={1} fontWeight={600}>
                  {item.toUpperCase()}
                </Text>
              </Link>
            </Li>
          ))}
          <LangButtons setLang={setLang} />
        </Ul>

        <Menu align="center" onClick={() => setToggle(true)}>
          <MenuIcon2 />
        </Menu>
      </NavWrapper>

      {toggle && (
        <SideBar>
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
        </SideBar>
      )}
    </>
  );
};

export default Navbar;
