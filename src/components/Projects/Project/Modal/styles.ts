import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(108, 122, 137, 1);
  padding: 0 0.5rem 1.5rem 0.5rem;
  width: 85vw;
  height: 85vh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0 0 20px rgba(108, 122, 137, 1);
  }
`;

export const Close = styled.span`
  width: 100%;
  text-align: right;
  margin-top: 15px;
  margin-right: 15px;

  svg {
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProjectImg = styled.div`
  width: 50%;
  /* height: 200px; */
  /* object-fit: cover; */
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 90%;
  font-size: 1rem;
  text-align: center;
`;

export const Features = styled.ul`
  width: 90%;
  font-size: 0.85rem;

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
  width: 90%;
  font-size: 0.85rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.green};
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

export const SubTitle = styled.h4`
  font-size: 1rem;
`;
