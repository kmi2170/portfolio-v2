import styled from "styled-components";

import { AppIcon, GithubIcon } from "../../assets/icons";
import { DataProject } from "../../lib/types";
import { theme } from "../../styles/globalStyles";

type LinksProps = {
  project: DataProject;
  marginTop?: number;
  marginBottom?: number;
};

const Links = (props: LinksProps) => {
  const { project, marginTop, marginBottom } = props;

  const blue = theme.colors.blue;

  return (
    <LinksWrapper
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={blue}
    >
      {project?.url ? (
        <a href={project?.url} target="_blank" rel="noopener noreferrer">
          <AppIcon />
          App
        </a>
      ) : (
        <LinkDisabled>
          <AppIcon /> App
        </LinkDisabled>
      )}
      <a href={project?.repo} target="_blank" rel="noopener noreferrer">
        <GithubIcon />
        Code
      </a>
    </LinksWrapper>
  );
};

export default Links;

const LinksWrapper = styled.div<{
  marginTop?: number;
  marginBottom?: number;
  color?: string;
}>`
  width: 100%;
  margin-top: ${({ marginTop = 0 }) => marginTop + "rem"};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom + "rem"};
  font-size: 1rem;

  color: ${({ color }) => color};

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

const LinkDisabled = styled.span<{}>`
  color: lightgrey;
`;
