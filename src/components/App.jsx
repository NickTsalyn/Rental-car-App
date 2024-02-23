import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home";
import { Favorites } from "./Favorites";
import { WelcomePage } from "pages/WelcomePage/WelcomePage";

export const App = () => {
  return <>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      </Route>
  </Routes>
  </>;
};
