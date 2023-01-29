import styled from "styled-components";
import headerCover from "../../assets/headercover.svg";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 15rem;

  img {
    margin-bottom: 3rem;
  }
`;
