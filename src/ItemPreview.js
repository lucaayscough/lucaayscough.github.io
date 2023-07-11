import { Link } from "react-router-dom"

function ItemPreview({ item }) {
  let src = `assets/thumbnails/${item.thumbnail}`

  return (
    <div key={item.id} className="itemPreview">
      <Link to={`/portfolio/${item.id}`}>
        <img src={src} alt={item.title} />

        <div className="previewInfo">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.tags}</p>
          
        </div>
      </Link>
    </div> 
  )
}

export default ItemPreview