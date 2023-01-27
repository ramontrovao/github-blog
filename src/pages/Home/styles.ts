import styled, { css } from "styled-components";

export const HomeContainer = styled.main`
  ${({ theme: { colors, font } }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 1rem;
    background: ${colors["base-background"]};
  `}
`;
