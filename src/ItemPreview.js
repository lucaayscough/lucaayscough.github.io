import { Link } from "react-router-dom"

function ItemPreview({ item }) {
  return (
    <div key={item.id}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.tags}</p>

      <Link to={`/portfolio/${item.id}`}>More details</Link>
    </div> 
  )
}

export default ItemPreview