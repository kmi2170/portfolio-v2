import { useState } from "react";
import styled from "styled-components"
import { HiMenuAlt4, HiX } from "react-icons/hi/index";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Nav>
      <Container>
        <Title>
          KH&apos;s Portofolio
        </Title>
        <Ul>
          {['projects', 'about', 'skills'].map((item) => (
            <li key={`link-${item}`}>
              <a href="#">
                {item}
              </a>
            </li>
          ))}
        </Ul>

        <Menu>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              initial={{ opacity: 0 }}
              // initial={{ width: 0 }}
              // animate={{ width: [100, 0] }}
              animate={{ x: [300, 0], opacity: 1 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <MenuSubContainer>
                <div>
                  <HiX onClick={() => setToggle(false)} />
                </div>
                <MenuUl>
                  {['projects', 'about', 'skills'].map((item) => (
                    <li key={`link-menu-${item}`}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </MenuUl>
              </MenuSubContainer>
            </motion.div>
          )}
        </Menu>
      </Container>
    </Nav >
  )
}

export default Navbar

const Nav = styled.div`
  width: 100vw;
  background-color: lightblue;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 0.25rem 0;
  z-index: 2;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
 `

const Title = styled.div`
  font-family: 'Alex Brush';
  font-weight: 600;
  font-size: 2rem;
  padding: 0 2rem ;

  @media screen and (max-width: 600px) {
    display: none;
    padding: 0 2.0rem;
  }
`

const Ul = styled.div`
  flex:1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  li {
    list-style: none;

    a {
      text-transform: uppercase;
       transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
         color: purple;
      }
    }
  }
`

const MenuUl = styled(Ul)`
  margin-top: 2rem;
  flex-direction: column;
  justify-content: flex-start;

  li {
    padding: 0.5rem 0;
  }
`

const MenuSubContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

const Menu = styled.div`
  width: 35px;
  height: 35px;
  /* position: relative; */

  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    color: navy;
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background-color: white;

    padding: 1rem;
    width: 80%;
    height: 100vh;

    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15)

    svg{
      color: navy;
    }
  }
`
