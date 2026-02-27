import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import PlayersPage from "./pages/PlayersPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
