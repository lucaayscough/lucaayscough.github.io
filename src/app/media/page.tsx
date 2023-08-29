import Image from "next/image"
import Link from "next/link"
import { compareDesc, format, parseISO } from 'date-fns'
import { allPortfolios } from 'contentlayer/generated'

export default function Media() {
  const posts = allPortfolios.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main>
      <h1>Media</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {posts.map((item, idx) => (
          <div key={idx} className="">
            <Link href={item.link} target="_blank">
              <Image
                priority
                src={`/images/media/${item.title.replace(/ /g, '_').toLowerCase()}.png`}
                height={1}
                width={768}
                alt={item.title}
              />
            </Link>
            <div className="p-4">
              <div className="">{item.role} </div>
              <div className="font-light">{item.title} ({format(parseISO(item.date), 'yyyy')})</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
