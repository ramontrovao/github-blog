import { ProfileCard } from "./ProfileCard";
import { Publications } from "./Publications";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <Publications />
    </HomeContainer>
  );
}
