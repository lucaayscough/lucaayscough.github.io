import { Link } from "react-router-dom"

function ItemPreview({ item }) {
  let src = `assets/thumbnails/${item.thumbnail}`

  return (
    <div key={item.id} className="itemPreview">
      <Link to={`/portfolio/${item.id}`}>
        <img src={src} alt={item.title} />

        <div className="previewInfo">
          <div className="itemTitle">{item.title}</div>
          <div className="itemDescription">{item.description}</div>
        </div>
      </Link>
    </div> 
  )
}

export default ItemPreview