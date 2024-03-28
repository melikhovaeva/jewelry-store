import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "./components";
import Root from "./pages/Root/root";
import University from "./pages/University/university";
import Catalog from "./pages/Catalog/catalog";
import Navbar from "./components/Navbar/navbar";
import Blog from "./pages/Blog";
import Story from "./pages/Story/story";

export function App(): React.ReactElement {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path={AppRoute.Root} element={<Root />} />
        <Route path={AppRoute.University} element={<University />} />
        <Route path={AppRoute.Catalog} element={<Catalog />} />
        <Route path={AppRoute.Blog} element={<Blog />} />
        <Route path={AppRoute.Story} element={<Story />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}
