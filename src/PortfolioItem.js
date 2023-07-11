import { useParams, useNavigate } from 'react-router-dom'
import portfolioData from "./portfolioData.json"
import "./PortfolioItem.css"

function PortfolioItem() {
  let {id} = useParams()
  const item = portfolioData.find((foundItem) => foundItem.id === Number(id))
  let src = `/assets/thumbnails/${item.thumbnail}`

  return(
    <div className="portfolioItem">
      <img src={src} alt={item.title} />
      <h2>{item.title.toUpperCase()}</h2>
      <p className="description">
        {item.description}
      </p>
    </div>
  )
}

export default PortfolioItem