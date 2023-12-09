import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from './components/const';
import Root from './pages/root/root';
import University from './pages/university/university';
import Catalog from './pages/catalog/catalog';
import Navbar from './components/navbar/navbar';
import Blog from './pages/blog/blog';

export function App(): React.ReactElement {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route 
          path={AppRoute.Root}
          element={<Root />}
        />
        <Route 
          path={AppRoute.University}
          element={<University />}
        />
        <Route 
          path={AppRoute.Catalog} 
          element={<Catalog />}
        />
        <Route 
          path={AppRoute.Blog} 
          element={<Blog />}
        />
        <Route 
          path='*'
          element={<Navigate to={'/'} replace />}
        />
      </Routes>
    </>
  );
}


