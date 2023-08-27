import Image from "next/image"
import { compareDesc, format, parseISO } from 'date-fns'
import { allPortfolios } from 'contentlayer/generated'
import "./page.css"

export default function Media() {
  const posts = allPortfolios.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main>
      <h1>media</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {posts.map((item, idx) => (
          <div key="idx" className="">
            <Image
              priority
              src={`/images/media/${item.title.replace(/ /g, '_').toLowerCase()}.png`}
              height={1}
              width={384}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
