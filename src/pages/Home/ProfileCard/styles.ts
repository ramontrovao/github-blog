import styled, { css } from "styled-components";

export const ProfileCardContainer = styled.div`
  ${({ theme: { colors, font } }) => css`
    max-width: 54rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: -5rem;
    padding: 2rem;
    border-radius: 10px;

    background: ${colors["base-profile"]};

    img {
      border-radius: 8px;
      width: 9.25rem;
      height: 9.25rem;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;

      ul {
        flex-wrap: wrap;
      }
    }
  `}
`;

export const ProfileInfosWrapper = styled.div`
  ${({ theme: { colors, font } }) => css`
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: color: ${font["large-md"]};
        color: ${colors["base-title"]};
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        font-size: ${font["small-md"]};
        color: ${colors["blue"]};
      }
    }

    main {
      p {
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        justify-self: center;
        color: ${colors["base-text"]};
      }
    }

    footer {
      ul {
        display: flex;
        gap: 1rem;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          list-style: none;

          color: ${colors["base-subtitle"]};
        }
      }
    }
  `}
`;
