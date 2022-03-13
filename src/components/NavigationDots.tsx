import Link from 'next/link';
import styled from 'styled-components';
import { navItems } from './Navbar/Navbar';

const NavigationDots = ({ activeItem }: { activeItem: string }) => {
  // console.log(activeItem);

  return (
    <Wrapper>
      {['home', ...navItems].map((item) => (
        <Link key={item} href={`#${item}`} passHref>
          <Dot isActive={item === activeItem} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default NavigationDots;

const Dot = styled.a<{ isActive: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }

  background-color: ${({ isActive }) =>
    isActive ? 'rgba(168, 101, 201, 1.0)' : 'rgba(144, 238, 144, 1.9)'};
`;

const Wrapper = styled.div`
  width: 1.5rem;
  height: 30vh;
  padding: 0.25rem;
  border-radius: 10px 0 0 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: sticky;
  /* top: calc(50vh - 5rem); */
  /* right: 0.75rem; */
  z-index: 10;

  /* background-color: rgba(255, 255, 255, 0.95); */
  background-color: rgba(0, 0, 0, 0.1);
  /* background-color: rgba(220, 220, 220, 0.75); */
  box-shadow: 0 0px 5px rgba(168, 168, 168, 0.5);

  @media screen and (max-width: 650px) {
    height: 40vh;
  }
`;
