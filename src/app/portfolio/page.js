"use client"

import { useState } from "react"
import portfolioData from "./portfolioData.json"
import PortfolioGrid from "./components/portfolio_grid.js"
import Tags from "./components/tags.js"
import "./page.css"

function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([])
  const allTags = [...new Set(portfolioData.flatMap(item => item.tags))]

  const itemsToShow = selectedTags.length > 0
    ? portfolioData.filter(item => item.tags.some(tag => selectedTags.includes(tag)))
    : portfolioData

  return (
    <main>
      <div className="portfolio">
        <Tags allTags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <PortfolioGrid itemsToShow={itemsToShow} />
      </div>
    </main>
  )
}

export default Portfolio