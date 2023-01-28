import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Chat,
  GithubLogo,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostMain, PostInfo, PostContent, PostContainer } from "./styles";

type userType = {
  login: string;
};

type postType = {
  title: string;
  body: string;
  created_at: Date;
  login: string;
  comments: number;
};

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<postType>({
    title: "Carregando...",
    body: "Carregando...",
    created_at: new Date(),
    login: "Carregando...",
    comments: 0,
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        await api
          .get(`/repos/ramontrovao/github-blog/issues/${id}`)
          .then(({ data }) => {
            setPost({
              title: data["title"],
              body: data["body"],
              created_at: new Date(data["created_at"]),
              login: data["user"]["login"],
              comments: data["comments"],
            });
          });
      } catch (err) {
        console.log(err);
      }
    };

    getPost();
  }, []);

  return (
    <PostMain>
      <PostContainer>
        <PostInfo>
          <header>
            <nav>
              <Link to={"/"}>
                <ArrowLeft size={20} /> VOLTAR
              </Link>

              <a
                href={`https://github.com/ramontrovao/github-blog/issues/${id}`}
                target="_blank"
              >
                VER NO GITHUB <ArrowUpRight size={20} />
              </a>
            </nav>
          </header>

          <main>
            <h1>{post.title}</h1>
          </main>

          <footer>
            <ul>
              <li>
                <GithubLogo size={25} /> {post.login}
              </li>

              <li>
                <Calendar size={25} />{" "}
                {formatDistanceToNow(post["created_at"], {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </li>

              <li>
                <Chat size={25} /> {post.comments} comentários
              </li>
            </ul>
          </footer>
        </PostInfo>
      </PostContainer>

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostMain>
  );
}
