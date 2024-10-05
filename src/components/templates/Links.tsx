import styled from "styled-components";

import { AppIcon, GithubIcon } from "../../assets/icons";
import { DataProject } from "../../lib/types";

type LinksProps = {
  project: DataProject;
  marginTop?: number;
  marginBottom?: number;
};

const Links = (props: LinksProps) => {
  const { project, marginTop, marginBottom } = props;

  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      {project?.url ? (
        <a href={project?.url} target="_blank" rel="noopener noreferrer">
          <AppIcon />
          App
        </a>
      ) : (
        <div></div>
      )}
      <a href={project?.repo} target="_blank" rel="noopener noreferrer">
        <GithubIcon />
        Code
      </a>
    </Wrapper>
  );
};

export default Links;

const Wrapper = styled.div<{
  marginTop?: number;
  marginBottom?: number;
}>`
  width: 100%;
  margin-top: ${({ marginTop = 0 }) => marginTop + "rem"};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom + "rem"};
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.blue};

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`;
