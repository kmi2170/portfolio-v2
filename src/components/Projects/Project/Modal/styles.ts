import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(108, 122, 137, 1);
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 85vw;
  height: 85vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: 'M PLUS Rounded 1c';

  &:hover {
    box-shadow: 0 0 20px rgba(108, 122, 137, 1);
  }
`;

export const AppName = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;

export const Close = styled.span`
  svg {
    width: 35px;
    height: 35px;
    color: blue;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const AppImg = styled.div`
  width: 50%;
  /* height: 200px; */
  /* object-fit: cover; */
  cursor: pointer;
  position: relative;

  img {
    width: 100%;

    &:hover {
      scale: 0.9;
      --webkit-filter: brightness(70%);
    }
  }
`;

export const Links = styled.div`
  width: 90%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: blue;

    display: flex;
    align-items: center;

    svg {
      font-size: 1.25rem;
      margin-right: 0.2rem;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span {
    font-size: 1.25rem;
    padding: 0 0.5rem;
    color: white;
    background-color: #4b365f;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  margin: 1rem 0;
  width: 80%;
  font-size: 1.25rem;
  text-align: center;
`;

export const Features = styled.ul`
  font-size: 1.25rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 0.5rem;
  }
`;

export const Details = styled.ul`
  font-size: 1.25rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.green};
    margin-right: 0.25rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;
