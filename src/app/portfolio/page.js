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












// function PostCard(post: Post) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), 'LLLL d, yyyy')}
//       </time>
//       <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
//     </div>
//   )
// }

// function Home() {
//   //const posts = allPortfolios.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

//   return (
//     <div className="mx-auto max-w-xl py-8">
//       <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
//       {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   )
// }