import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileCardContainer, ProfileInfosWrapper } from "./styles";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="./assets/profileimg.png" alt="" />

      <ProfileInfosWrapper>
        <header>
          <h2>Ramon Pinheiro</h2>

          <a href="#">
            GITHUB <ArrowUpRight size={25} />
          </a>
        </header>

        <main>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo est
            cum sapiente doloremque reiciendis unde.
          </p>
        </main>

        <footer>
          <ul>
            <li>
              <GithubLogo size={20} />
              ramontrovao
            </li>
            <li>
              <Buildings size={20} />
              Freelancer
            </li>
            <li>
              <Users size={20} />
              18 seguidores
            </li>
          </ul>
        </footer>
      </ProfileInfosWrapper>
    </ProfileCardContainer>
  );
}
