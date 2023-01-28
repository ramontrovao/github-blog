import styled, { css } from "styled-components";

export const HomeMain = styled.main`
  ${({ theme: { colors, font } }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
    background: ${colors["base-background"]};
  `}
`;

export const HomeContainer = styled.div`
  width: 54rem;

  @media (max-width: 910px) {
    width: 100%;
    padding: 1rem;
  }
`;
