import { Link } from "react-router-dom"
import "./ItemPreview.css"

function ItemPreview({ item }) {
  let src = `assets/thumbnails/${item.thumbnail}`

  return (
    <div key={item.id} className="itemPreview">
      <img src={src} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.tags}</p>

      <Link to={`/portfolio/${item.id}`}>More details</Link>
    </div> 
  )
}

export default ItemPreview