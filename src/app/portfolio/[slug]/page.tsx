// app/portfolio/[slug]/page.tsx

import "./page.css"
import { format, parseISO } from 'date-fns'
import { allPortfolios } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPortfolios.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPortfolios.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

function PortfolioItem({ params }: { params: { slug: string } }) {
  const post = allPortfolios.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const MDXContent = useMDXComponent(post.body.code)

  const src = `/assets/thumbnails/${post.title.replace(/ /g, '_').toLowerCase()}.png`

  return(
    <main>
      <div className="portfolioItem">
        <div className="banner">
          <div className="title">
            <h1>{post.title.toUpperCase()}</h1>
          </div>
          <div className="img">
            <img src={src} alt={post.title} />
          </div>
        </div>
        <article className="content">
          <div className="abstract"><p>{post.abstract}</p></div>
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            <p>{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
          </time>
          <MDXContent />
        </article>
      </div>
    </main>
  )
}

export default PortfolioItem