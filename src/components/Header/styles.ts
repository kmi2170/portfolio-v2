import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Card = styled.div`
  font-size: 1rem;
  font-family: 'M PLUS Rounded 1c';

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 750px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const Title = styled.h1`
  text-align: left;
  width: 80%;
  z-index: 2;

  font-family: 'Alex Brush';
  font-size: 4em;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Welcome = styled.h1`
  margin-top: 2em;
  text-align: center;
  z-index: 2;

  span {
    font-family: 'Alex Brush';
    font-size: 1.5em;

    span {
      color: darkblue;
    }
  }
`;

export const Intro = styled.div`
  width: 80%;
  text-align: right;
  margin-top: 0em;
  font-size: 1.75em;
  font-weight: 600;

  span {
    margin-left: 0.25em;
    font-size: 1.75em;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const About = styled.div`
  width: 80%;
  text-align: right;

  margin-top: 0.75em;
  font-size: 1.75em;
  font-weight: 600;
  z-index: 2;

  span:first-child {
    font-size: 1.25em;
    color: ${({ theme }) => theme.colors.blue};
  }

  span:nth-child(2) {
    font-size: 1.25em;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Description = styled.div`
  margin-top: 1.5em;
  font-size: 1.75em;
  font-style: italic;
  color: darkgoldenrod;
  z-index: 2;
`;

export const BackgroundIcon = styled.img<{ top: string; left: string }>`
  /* display: inline-grid; */
  /* grid-column-start: 1; */
  /* grid-row-start: 1; */

  height: 50%;
  width: 50%;
  z-index: 1;
  opacity: 0.03;

  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;
