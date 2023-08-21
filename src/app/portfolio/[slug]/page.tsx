// app/portfolio/[slug]/page.js

import "./page.css"
import { format, parseISO } from 'date-fns'
import { allPortfolios } from 'contentlayer/generated'

export const generateStaticParams = async () => allPortfolios.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPortfolios.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

function PortfolioItem({ params }: { params: { slug: string } }) {
  const post = allPortfolios.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return(
    <article>
      <div className="portfolioItem">
        <div className="banner">
          <div className="title">
            <h1>{post.title.toUpperCase()}</h1>
          </div>
          <div className="img"></div>
        </div>
        <div className="abstract"></div>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </article>
  )
}

export default PortfolioItem