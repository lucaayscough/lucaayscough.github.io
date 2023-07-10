import ItemPreview from "./ItemPreview.js"

function PortfolioGrid({ itemsToShow }) {
  return (
    <div className="portfolioGrid">
      {itemsToShow.map(item => (
        <ItemPreview item={item} />
      ))}
    </div>
  )
}

export default PortfolioGrid