import styled from "styled-components";

export const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  background-color: ${({ theme: { colors } }) => colors["base-background"]};

  h1 {
    text-align: center;
    color: ${({ theme: { colors } }) => colors["base-title"]};
  }

  a {
    margin-top: 1rem;
    font-size: ${({ theme: { font } }) => font["large-sm"]};
    color: ${({ theme: { colors } }) => colors["blue"]};
  }
`;
