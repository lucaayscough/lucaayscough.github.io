import ItemPreview from "./item_preview.js"
import "./portfolio_grid.css"

function PortfolioGrid({ itemsToShow }) {
  return (
    <div className="portfolioGrid">
      {itemsToShow.map(item => (
        <ItemPreview key={item} item={item} />
      ))}
    </div>
  )
}

export default PortfolioGrid