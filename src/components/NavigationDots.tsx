import Link from "next/link";
import styled from "styled-components";
import { navItems } from "./Navbar/Navbar";

const NavigationDots = (
  { activeItem }: { activeItem: string }
) => {
  console.log(activeItem);

  return (
    <Wrapper>
      {
        ['home', ...navItems].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            passHref
          >
            <Dot
              isActive={item === activeItem}
            />
          </Link>
        ))
      }
    </Wrapper>
  )
}

export default NavigationDots

const Dot = styled.a<{ isActive: boolean }>`
      width: 1rem;
      height: 1rem;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }

      background-color: ${({ isActive }) => isActive ? 'rgba(168, 101, 201, 0.8)' : '#fff'};
`

const Wrapper = styled.div`
      width: 1.5rem;
      height: 8rem;
      padding: 0.25rem;
      border-radius: 10px 0 0 8px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      position: sticky;
      /* top: calc(50vh - 4rem); */
      /* right: 0.75rem; */
      z-index: 10;

      background-color: rgba(220, 220, 220, 0.75);
      box-shadow: 0 0px 5px rgba(168, 168, 168, 0.5);
      `
