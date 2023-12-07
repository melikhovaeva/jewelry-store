import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './components/const';
import Root from './pages/root/root';
import University from './pages/university/university';
import Catalog from './pages/catalog/catalog';
import Navbar from './components/navbar/navbar';

function App(): JSX.Element {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
