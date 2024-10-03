import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2rem;

  width: 350;

  @media (min-width: 600px) {
    width: 600px;
  }
  @media (min-width: 600px) {
    width: 600px;
  }
  @media (min-width: 900px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (min-width: 1500px) {
    width: 1500px;
  }
`;

export const Profile = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(12, 1fr);
`;

export const Title = styled.h1`
  grid-row: 1 / span 1;
  width: 100%;
  text-align: left;
  font-family: "Alex Brush";
  font-size: 2.5rem;
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const MySelf = styled.h2`
  grid-row: 3 / span 1;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: #555;

  span {
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Role = styled.h2`
  grid-row: 5 / span 1;
  width: 100%;
  text-align: right;
  font-weight: 600;
  color: #555;

  span:first-child {
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.blue};
  }

  span:nth-child(2) {
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Welcome = styled.h2`
  width: 100%;
  grid-row: 12 / span 1;
  text-align: center;
  color: #555;
`;
