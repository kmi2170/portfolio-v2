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
  margin-top: 1rem;
  padding-right: 1rem;

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
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
  }
`;

// export const Description = styled.div`
//   width: 50%;
//   font-size: 1rem;
//   text-align: center;
//   max-width: 900px;
// `;

export const Features = styled.ul`
  width: 90%;
  /* max-width: 900px; */
  font-size: 1rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
`;

export const Details = styled.ul`
  width: 90%;
  font-size: 0.85rem;
  /* max-width: 900px; */

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
`;
