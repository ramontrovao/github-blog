import styled, { css } from "styled-components";

export const PostMain = styled.main`
  ${({ theme: { colors, font } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    background-color: ${colors["base-background"]};

    @media (max-width: 910px) {
      padding: 1rem;
    }
  `}
`;

export const PostContainer = styled.div`
  ${({ theme: { colors, font } }) => css`
    margin-top: -4rem;
    padding: 2rem;
    border-radius: 10px;
    width: 56rem;
    background: ${colors["base-profile"]};

    header {
      nav {
        display: flex;
        justify-content: space-between;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          font-size: ${font["small-md"]};
          color: ${colors["blue"]};
        }
      }
    }

    main {
      margin-top: 1.5rem;
      margin-bottom: 1rem;

      h1 {
        font-size: ${font["large-md"]};
        color: ${colors["base-title"]};
      }
    }

    footer {
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          font-size: ${font["medium-md"]};
          color: ${colors["base-span"]};
        }
      }
    }

    @media (max-width: 425px) {
      footer {
        ul {
          flex-wrap: wrap;
        }
      }
    }

    @media (max-width: 910px) {
      width: 100%;
    }
  `}
`;

export const PostInfo = styled.section``;

export const PostContent = styled.div`
  ${({ theme: { colors, font } }) => css`
    width: 56rem;
    margin-top: 2.5rem;

    p {
      color: ${colors["base-text"]};
    }

    code {
      display: block;
      margin: 0.5rem 0;
      background: ${colors["base-post"]};
      color: ${colors["blue"]};
      padding: 1rem;
      border-radius: 6px;
    }

    @media (max-width: 910px) {
      width: 100%;
      padding: 1rem;
    }
  `}
`;
