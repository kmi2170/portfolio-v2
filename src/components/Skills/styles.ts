import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
  font-family: 'M PLUS Rounded 1c';
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  span {
    color: rgb(0, 0, 139);
  }
`;

export const SubTitle = styled.h3`
  margin-left: 1rem;
`;

export const Container = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Skill = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export const Icon = styled.div`
  padding: 0.15rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  background-color: rgba(240, 240, 240, 0.7);
  box-shadow: 0 4px 5px rgba(168, 168, 168, 0.5);
  /* background-color: lightpink; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconName = styled.p`
  word-wrap: normal;
  text-align: center;
  font-size: 1.25rem;
`;
