import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { ProfileCardContainer, ProfileInfosWrapper } from "./styles";

type userInfoType = {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
};

export function ProfileCard() {
  const [userInfo, setUserInfo] = useState({
    name: "Carregando...",
    bio: "Carregando...",
    login: "Carregando...",
    company: "Carregando...",
    followers: 0,
  } as userInfoType);

  useEffect(() => {
    const getUser = async () => {
      await api.get("/users/ramontrovao").then(({ data }) => {
        setUserInfo({
          name: data["name"],
          bio: data["bio"],
          login: data["login"],
          company: data["company"],
          followers: data["followers"],
        });
      });
    };

    getUser();
  }, []);

  const { name, bio, login, company, followers } = userInfo;

  return (
    <ProfileCardContainer>
      <img
        src={`https://github.com/${login}.png`}
        title={`Imagem do perfil "${login}" no Github`}
      />

      <ProfileInfosWrapper>
        <header>
          <h2>{name}</h2>

          <a href={`https://github.com/${login}`}>
            GITHUB <ArrowUpRight size={25} />
          </a>
        </header>

        <main>
          <p>{bio}</p>
        </main>

        <footer>
          <ul>
            <li>
              <GithubLogo size={20} />
              {login}
            </li>
            <li>
              <Buildings size={20} />
              {company ?? "Nenhum"}
            </li>
            <li>
              <Users size={20} />
              {followers} seguidores
            </li>
          </ul>
        </footer>
      </ProfileInfosWrapper>
    </ProfileCardContainer>
  );
}
