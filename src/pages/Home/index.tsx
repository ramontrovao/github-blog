import { ProfileCard } from "./ProfileCard";
import { Publications } from "./Publications";
import { HomeContainer, HomeMain } from "./styles";

export function Home() {
  return (
    <HomeMain>
      <HomeContainer>
        <ProfileCard />
        <Publications />
      </HomeContainer>
    </HomeMain>
  );
}
