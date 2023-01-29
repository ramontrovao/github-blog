import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate } from "react-router-dom";
import { api } from "../../../lib/axios";
import {
  Publication,
  PublicationGridSection,
  PublicationsContainer,
  PublicationSearch,
  PublicationSearchWrapper,
  PublicationTitle,
} from "./styles";

type postType = {
  title: string;
  body: string;
  created_at: Date;
  number: number;
};

export function Publications() {
  const [posts, setPosts] = useState<postType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        await api
          .get("/repos/ramontrovao/github-blog/issues")
          .then(({ data }) => {
            data.map((post: postType) => {
              setPosts((prev) => [
                ...prev,
                {
                  title: post["title"],
                  body: post["body"],
                  created_at: new Date(post["created_at"]),
                  number: post["number"],
                },
              ]);
            });
          });
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, []);

  function handleOpenPost(id: number) {
    navigate(`/post/${id}`);
  }

  const { register, watch } = useForm();
  const searchQ = watch("question");
  const isSearchQNullOrUndefined = !searchQ;

  return (
    <PublicationsContainer>
      <PublicationSearchWrapper>
        <PublicationTitle>
          <h3>Publicações</h3>

          {posts.length === 1 ? (
            <span>{posts.length} publicação</span>
          ) : (
            <span>{posts.length} publicações</span>
          )}
        </PublicationTitle>

        <PublicationSearch>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register("question")}
          />
        </PublicationSearch>
      </PublicationSearchWrapper>

      <PublicationGridSection>
        {posts.map((post: postType) =>
          isSearchQNullOrUndefined ? (
            <Publication
              onClick={() => {
                handleOpenPost(post.number);
              }}
              key={post.number}
            >
              <header>
                <h4>{post.title}</h4>

                <span>
                  {formatDistanceToNow(post["created_at"], {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>

              <main>
                <ReactMarkdown>
                  {post.body.split("").slice(0, 250).join("")}
                </ReactMarkdown>{" "}
                <p>...</p>
              </main>
            </Publication>
          ) : (
            post.title.toLowerCase().includes(searchQ.toLowerCase()) && (
              <Publication
                onClick={() => {
                  handleOpenPost(post.number);
                }}
              >
                <header>
                  <h4>{post.title}</h4>

                  <span>
                    {formatDistanceToNow(new Date(post["created_at"]), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </header>

                <main>
                  <ReactMarkdown>
                    {post.body.split("").slice(0, 250).join("")}
                  </ReactMarkdown>
                </main>
              </Publication>
            )
          )
        )}
      </PublicationGridSection>
    </PublicationsContainer>
  );
}
