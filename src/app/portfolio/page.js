// app/portfolio/page.js
"use client"

import { useState } from "react"
import Link from "next/link"
import "./page.css"

import { compareDesc, format, parseISO } from 'date-fns'
import { allPortfolios, Post } from 'contentlayer/generated'

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
  const src = `assets/thumbnails/${item.title.replace(/ /g, '_').toLowerCase()}.png`

  return (
    <div className="itemPreview">
      <Link href={item.url}>
        <img src={src} alt={item.title} />

        <div className="previewInfo">
          <div className="itemTitle">{item.title}</div>
          <div className="itemBrief">{item.abstract}</div>
          <div className="itemFooter">
            {item.client} • <time dateTime={item.date}>{format(parseISO(item.date), 'yyyy')}</time>
          </div>
        </div>
      </Link>
    </div> 
  )
}

function PortfolioGrid({ itemsToShow }) {
  return (
    <div className="portfolioGrid">
      {itemsToShow.map((item, idx) => (
        <ItemPreview key={idx} item={item} />
      ))}
    </div>
  )
}

function Portfolio() {
  const posts = allPortfolios.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  const [selectedTags, setSelectedTags] = useState([])
  const allTags = [...new Set(allPortfolios.flatMap(item => item.tags))]

  const postsToShow = selectedTags.length > 0
    ? allPortfolios.filter(post => post.tags.some(tag => selectedTags.includes(tag)))
    : allPortfolios

  return (
    <main>
      <div className="portfolio">
        <Tags allTags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <PortfolioGrid itemsToShow={postsToShow} />
      </div>
    </main>
  )
}

export default Portfolio
