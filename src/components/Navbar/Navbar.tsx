import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi/index';
import { motion } from 'framer-motion';

import LangButtons from './LangButtons/LangButtons';
import { Lang } from '../../lib/types';
import { Topbar, Title, Ul, Li, Menu, SideBar, UlMenu } from './styles';

export const navItems = ['projects', 'about', 'skills'];

interface NavbarProps {
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ setLang }: NavbarProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav>
      <Topbar>
        <Title>
          <Link href='#home'>

            <span>KH&apos;s</span>Portofolio
          </Link>
        </Title>
        <Ul>
          {navItems.map((item) => (
            <Li key={`link-${item}`}>
              <Link href={`#${item}`}>
                {item}
              </Link>
            </Li>
          ))}
          <LangButtons setLang={setLang} />
        </Ul>

        <Menu>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </Menu>
      </Topbar>

      {toggle && (
        <SideBar>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '50vw' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <UlMenu>
              {navItems.map((item) => (
                <Li key={`link-menu-${item}`}>
                  <Link href={`#${item}`}>
                    {item}
                  </Link>
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
