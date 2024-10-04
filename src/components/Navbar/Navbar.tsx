import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import LangButtons from "./LangButtons/LangButtons";
import { Lang } from "../../lib/types";
import { Topbar, Title, Ul, Li, Menu, SideBar, UlMenu } from "./styles";
import { CloseIcon, MenuIcon2 } from "../../assets/icons";

export const navItems = ["projects", "about", "skills"];

interface NavbarProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ setLang }: NavbarProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav>
      <Topbar>
        <Title>
          <Link href="#home">
            <span>KH&apos;s</span>Portfolio
          </Link>
        </Title>
        <Ul>
          {navItems.map((item) => (
            <Li key={`link-${item}`}>
              <Link href={`#${item}`}>{item}</Link>
            </Li>
          ))}
          <LangButtons setLang={setLang} />
        </Ul>

        <Menu onClick={() => setToggle(true)}>
          <MenuIcon2 />
        </Menu>
      </Topbar>

      {toggle && (
        <SideBar>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50vw" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div onClick={() => setToggle(false)}>
              <CloseIcon />
            </div>
            <UlMenu>
              {navItems.map((item) => (
                <Li key={`link-menu-${item}`}>
                  <Link href={`#${item}`}>{item}</Link>
                </Li>
              ))}
              <LangButtons setLang={setLang} />
            </UlMenu>
          </motion.div>
        </SideBar>
      )}
    </nav>
  );
};

export default Navbar;
