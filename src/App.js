import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/fonts.css"
import "./App.css"
import Header from "./Header.js"
import Home from "./Home.js"
import Portfolio from "./Portfolio.js"
import PortfolioItem from "./PortfolioItem.js"

function App() {
  return(
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Portfolio/:id" element={<PortfolioItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
