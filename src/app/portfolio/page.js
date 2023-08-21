"use client"

import { useState } from "react"
import Link from "next/link"
import portfolioData from "./portfolioData.json"
import "./page.css"

const Switch = ({ id, isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />

      <span className="tag">
        {id.replace("_", " ").toUpperCase()}
      </span>
    </label>
  )
}

function Tags({ allTags, selectedTags, setSelectedTags }) {
  return (
    <nav className="tags">
      {allTags.map(tag => (
        <Switch
          className="filterSwitch"
          key={tag}
          id={tag}
          isToggled={selectedTags.includes(tag)}
          onToggle={() =>
            setSelectedTags(prevTags =>
              prevTags.includes(tag)
                ? prevTags.filter(t => t !== tag)
                : [...prevTags, tag]
            )
          }
        />
      ))}
    </nav>
  )
}

function ItemPreview({ item }) {
  const src = `assets/thumbnails/${item.thumbnail}`

  return (
    <div key={item.id} className="itemPreview">
      <Link href={`/portfolio/${item.id}`}>
        <img src={src} alt={item.title} />

        <div className="previewInfo">
          <div className="itemTitle">{item.title}</div>
          <div className="itemBrief">{item.brief}</div>
          <div className="itemFooter">{item.client} • {item.year}</div>
        </div>
      </Link>
    </div> 
  )
}

function PortfolioGrid({ itemsToShow }) {
  return (
    <div className="portfolioGrid">
      {itemsToShow.map(item => (
        <ItemPreview key={item.id} item={item} />
      ))}
    </div>
  )
}

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