import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { HiMenuAlt4, HiX } from 'react-icons/hi/index';
import { motion } from 'framer-motion';

import LangButtons from './LangButtons/LangButtons';
import { Lang } from '../../lib/types';

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
            <a>
              <span>KH&apos;s</span> Portofolio
            </a>
          </Link>
        </Title>
        <Ul>
          {navItems.map((item) => (
            <Li key={`link-${item}`}>
              <Link href={`#${item}`}>
                <a>{item}</a>
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
                    <a>{item}</a>
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

const Topbar = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 3rem;
  padding: 0.25rem 0;

  background-color: rgba(173, 216, 230, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 4px 5px rgba(168, 168, 168, 0.5);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'Alex Brush';
  font-weight: 600;
  font-size: 2rem;
  padding: 0 2rem;

  span {
    color: rgb(0, 0, 139);
  }
`;

const Ul = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 650px) {
    display: none;
    padding: 0 2rem;
  }
`;

const Li = styled.li`
  list-style: none;
  padding: 0.25rem 0;

  a {
    font-family: 'M PLUS Rounded 1c';
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    padding: 0.5rem;
    border-radius: 40%;
  }

  &:hover {
    a {
      background-color: rgba(255, 182, 193, 0.3);
      cursor: pointer;
    }
  }
`;

const UlMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  /* height: 50vh; */
`;

const Menu = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 650px) {
    display: none;
  }

  svg {
    width: 70%;
    height: 70%;
    color: darkblue;
    margin-right: 10px;
  }
`;

const SideBar = styled.aside`
  /* min-width: 0; */
  /* max-width: 80%; */
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;

  padding: 1rem;
  background-color: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: -4px 0 5px rgba(168, 168, 168, 0.5);

  svg {
    width: 10%;
    height: 10%;
    color: darkblue;

    &:hover {
      cursor: pointer;
    }
  }
`;
