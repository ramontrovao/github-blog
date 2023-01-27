import {
  PublicationGridSection,
  PublicationsContainer,
  PublicationSearch,
  PublicationSearchWrapper,
  PublicationTitle,
} from "./styles";

export function Publications() {
  return (
    <PublicationsContainer>
      <PublicationSearchWrapper>
        <PublicationTitle>
          <h3>Publicações</h3>

          <span>6 publicações</span>
        </PublicationTitle>

        <PublicationSearch>
          <input type="text" placeholder="Buscar conteúdo" />
        </PublicationSearch>
      </PublicationSearchWrapper>

      <PublicationGridSection>
        <div>
          <header>
            <h4>JavaScript data types and data structures</h4>

            <span>há 1 dia</span>
          </header>

          <main>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              officiis reprehenderit aliquid debitis nesciunt recusandae labore
              quisquam harum necessitatibus ab nihil numquam nam, alias animi
              saepe sapiente itaque voluptates ea.
            </p>
          </main>
        </div>

        <div>
          <header>
            <h4>JavaScript data types and data structures</h4>

            <span>há 1 dia</span>
          </header>

          <main>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              officiis reprehenderit aliquid debitis nesciunt recusandae labore
              quisquam harum necessitatibus ab nihil numquam nam, alias animi
              saepe sapiente itaque voluptates ea.
            </p>
          </main>
        </div>

        <div>
          <header>
            <h4>JavaScript data types and data structures</h4>

            <span>há 1 dia</span>
          </header>

          <main>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              officiis reprehenderit aliquid debitis nesciunt recusandae labore
              quisquam harum necessitatibus ab nihil numquam nam, alias animi
              saepe sapiente itaque voluptates ea.
            </p>
          </main>
        </div>
      </PublicationGridSection>
    </PublicationsContainer>
  );
}
