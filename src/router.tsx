import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { NotFound404 } from "./pages/NotFound404";
import { Post } from "./pages/Post";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}
