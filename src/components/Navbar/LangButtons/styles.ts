import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin-right: 20px;

  border: none;
  &:hover {
    cursor: pointer;
  }

  div {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    background-color: lightgreen;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
