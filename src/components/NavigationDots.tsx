import Link from 'next/link';

import { navItems } from './Navbar/Navbar';
import { Wrapper, Dot } from './styles';

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
