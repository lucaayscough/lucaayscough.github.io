import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio.js";
import PortfolioItem from "./PortfolioItem.js";

function App() {
  return(
    <BrowserRouter>
      <h1><center><Link to="/">Home</Link></center></h1>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Portfolio/:id" element={<PortfolioItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
