import { Link } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export function NotFound404() {
  return (
    <NotFoundContainer>
      <h1>Ei, onde você está indo? Essa página não existe!</h1>

      <Link to="/">Voltar para a página inicial</Link>
    </NotFoundContainer>
  );
}
