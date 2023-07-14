import ItemPreview from "./item_preview.js"

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