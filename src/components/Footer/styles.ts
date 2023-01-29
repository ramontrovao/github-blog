import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 3rem;
  background: ${({ theme: { colors } }) => colors["base-background"]};

  p {
    text-align: center;
    color: ${({ theme: { colors } }) => colors["base-text"]};
    strong {
      color: ${({ theme: { colors } }) => colors["blue"]};
    }
  }
`;
