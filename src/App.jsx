import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Error, Animes, Login, SingleAnime,Register,ForgetPaasword, Search } from "./pages";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPaasword />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/search" element={<Search />} />
        <Route path="/animes/:id" element={<SingleAnime />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
