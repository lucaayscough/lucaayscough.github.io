import Image from 'next/image'
import ContentEmbed from "./content_embed.js"
import "./page.css"

export default function Home() {
  return (
    <main>
      <div className="home">
        <div className="videoContent">
          <ContentEmbed url="https://www.youtube.com/embed/DNTj3ZSZSrE" />

          <p>
            sdksmdskdmskdm
            aasasasnasnamsnamnsmansmansmansmansmansmansmanmn amsnmansmansmanmsnamsnam
            nsmansmansmnamsnamsn
          </p>
        </div>
      </div>
    </main> 
  )
}
