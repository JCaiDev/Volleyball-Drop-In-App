import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import "./App.css";
import GameDetailPage from "./pages/GameDetailPage/GameDetailPage.tsx";
import HostGamePage from "./pages/host/HostGamePage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GameDetailPage />} />
        <Route path="/host" element={<HostGamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
