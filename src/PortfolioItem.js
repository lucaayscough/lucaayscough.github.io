import { useParams, Link } from 'react-router-dom'
import portfolioData from "./portfolioData.json"
import "./PortfolioItem.css"

function PortfolioItem() {
  let {id} = useParams()
  const item = portfolioData.find((foundItem) => foundItem.id === Number(id))
  let src = `/assets/thumbnails/${item.thumbnail}`

  return(
    <div className="portfolioItem">
      <div className="homeButton"><Link to="/">HOME</Link></div>

      <div className="banner">
        <div className="title">
          <h1>{item.title.toUpperCase()}</h1>
        </div>
        <div className="img">
          <img src={src} alt={item.title} />
        </div>
      </div>
      <p className="description">
        {item.description}
      </p>
    </div>
  )
}

export default PortfolioItem