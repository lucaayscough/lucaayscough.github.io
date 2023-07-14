import { Routes, Route, useLocation } from "react-router-dom"
import "./styles/fonts.css"
import "./App.css"
import Header from "./Header.js"
import Home from "./Home.js"
import Portfolio from "./Portfolio.js"
import PortfolioItem from "./PortfolioItem.js"

function App() {
  const location = useLocation()
  const match = location.pathname.match(/^\/portfolio\/\w+$/);

  return(
    <div className="App">
      {!match && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioItem />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
