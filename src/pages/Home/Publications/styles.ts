import styled, { css } from "styled-components";

export const PublicationsContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
`;

export const PublicationSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PublicationTitle = styled.div`
  ${({ theme: { colors, font } }) => css`
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: ${font["large-sm"]};
      color: ${colors["base-subtitle"]};
    }

    span {
      font-size: ${font["medium-sm"]};
      color: ${colors["base-span"]};
    }
  `}
`;

export const PublicationSearch = styled.form`
  ${({ theme: { colors, font } }) => css`
    input {
      width: 100%;
      padding: 0.75rem 1rem;
      background: ${colors["base-input"]};
      border: 1px solid ${colors["base-border"]};
      font-size: ${font["medium-sm"]};
      outline: none;
      border-radius: 6px;
      color: ${colors["base-label"]};

      ::placeholder {
        color: ${colors["base-label"]};
      }

      :focus {
        transition: border 0.4s;
        color: ${colors["base-text"]};
        border: 1px solid ${colors["blue"]};
      }
    }
  `}
`;

export const PublicationGridSection = styled.section`
  ${({ theme: { colors, font } }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21.875rem, 1fr));
    grid-gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 410px) {
      grid-template-columns: repeat(auto-fit, 100%);
    }
  `}
`;

export const Publication = styled.div`
  ${({ theme: { colors, font } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: ${colors["base-post"]};
    padding: 2rem;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: border 0.2s;
    cursor: pointer;

    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      h4 {
        color: ${colors["base-title"]};
        font-size: ${font["large-sm"]};
        width: 80%;
      }

      span {
        color: ${colors["base-span"]};
        font-size: ${font["medium-sm"]};
      }
    }

    main {
      * {
        color: ${colors["base-text"]};
      }
    }

    :hover {
      border: 2px solid ${colors["base-label"]};
    }
  `}
`;
