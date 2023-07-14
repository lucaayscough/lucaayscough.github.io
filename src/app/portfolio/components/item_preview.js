import Link from "next/link"
import "./item_preview.css"

function ItemPreview({ item }) {
  const src = `assets/thumbnails/${item.thumbnail}`

  return (
    <div key={item.id} className="itemPreview">
      <Link href={`/portfolio/${item.id}`}>
        <img src={src} alt={item.title} />

        <div className="previewInfo">
          <div className="itemTitle">{item.title}</div>
          <div className="itemDescription">{item.brief}</div>
        </div>
      </Link>
    </div> 
  )
}

export default ItemPreview