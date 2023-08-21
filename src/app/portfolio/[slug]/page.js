"use client"

import Image from "next/image"
import portfolioData from "../portfolioData.json"
import "./page.css"
import { Header } from "components/header.js"

function PortfolioItem({ params }) {
  let id = params.slug
  const item = portfolioData.find((foundItem) => foundItem.id === Number(id))
  let src = `/assets/thumbnails/${item.thumbnail}`

  return(
    <main>
      <div className="portfolioItem">
        <div className="banner">
          <div className="title">
            <h1>{item.title.toUpperCase()}</h1>
          </div>
          <div className="img">
            <img src={src} alt={item.title} />
          </div>
        </div>
        <div className="brief">
          {item.brief}
        </div>
        <div className="description">
          {item.description}
        </div>
      </div>
    </main>
  )
}

export default PortfolioItem