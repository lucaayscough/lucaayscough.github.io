import { useParams, useNavigate } from 'react-router-dom'
import portfolioData from "./portfolioData.json"

function PortfolioItem() {
  let {id} = useParams()
  const item = portfolioData.find((foundItem) => foundItem.id === Number(id))

  return(
    <div className="portfolioItem">
      <h2>{item.title}</h2>
    </div>
  )
}

export default PortfolioItem