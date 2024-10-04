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

export const ProjectName = styled.div`
  font-size: 1.5rem;
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

export const Links = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    align-items: flex-end;

    svg {
      font-size: 1.25rem;
      margin-right: 0.25rem;
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
    font-size: 0.85rem;
    font-weight: 600;
    color: #4b365f;
    padding: 0.25rem 0.5rem 0.05rem 0.5rem;
    border: 2px solid #4b365f;
    border-radius: 5px;
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
