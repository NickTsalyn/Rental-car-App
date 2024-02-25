import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/HomePage/Home";
import { Favorites } from "../pages/FavoritesPage/Favorites";
import { WelcomePage } from "pages/WelcomePage/WelcomePage";

export const App = () => {
  return <>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path="/catalog" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      </Route>
      <Route path="*" element={<WelcomePage/>}/>
  </Routes>
  </>;
};
