import styled, { css } from "styled-components";

export const ProfileCardContainer = styled.div`
  ${({ theme: { colors, font } }) => css`
    display: flex;
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
      justify-content: center;

      ul {
        flex-wrap: wrap;
      }
    }
  `}
`;

export const ProfileInfosWrapper = styled.div`
  ${({ theme: { colors, font } }) => css`
    width: 100%;
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
        border-bottom: 2px solid transparent;
        transition: border .4s;

        &:hover {
            border-bottom: 2px solid ${colors["blue"]};
        }
      }
    }

    main {
      width: 100%;
      margin-top: 1rem;
        margin-bottom: 3.5rem;

      p {
        justify-self: center;
        color: ${colors["base-text"]};
      }
    }

    footer {
      width: 100%;

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
