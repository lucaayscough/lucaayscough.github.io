import { useState } from "react"
import { Link } from "react-router-dom"
import portfolioData from "./portfolioData.json"
import PortfolioGrid from "./PortfolioGrid.js"
import Tags from "./Tags.js"
import "./Portfolio.css"

function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([])
  const allTags = [...new Set(portfolioData.flatMap(item => item.tags))]

  const itemsToShow = selectedTags.length > 0
    ? portfolioData.filter(item => item.tags.some(tag => selectedTags.includes(tag)))
    : portfolioData

  return (
    <div className="portfolio">
      <Tags allTags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <PortfolioGrid itemsToShow={itemsToShow} />
    </div>
  )
}

export default Portfolio