import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharactersList } from "./pages/CharactersList";
import { Character } from "./pages/Character";
import Search from "./pages/Search";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" Component={CharactersList}></Route>
        <Route path="/search" Component={Search}></Route>
        <Route path={`/character/:id`} Component={Character}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
