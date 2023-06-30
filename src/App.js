import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PortfolioGrid from "./PortfolioGrid.js";
import PortfolioItem from "./PortfolioItem.js";

const portfolioData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is project 1',
    image: 'logo192.png',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is project 2',
    image: 'logo192.png',
  },
];

function App() {
  return(
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/Item">Item</Link>

      <Routes>
        <Route path="/" element={<PortfolioGrid portfolioData={portfolioData} />} />
        <Route path="/Item" element={<PortfolioItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
