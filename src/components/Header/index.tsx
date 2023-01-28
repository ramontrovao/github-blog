import { HeaderContainer } from "./styles";
import githubLogo from "../../assets/github-blog-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubLogo} />
    </HeaderContainer>
  );
}
