import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import portfolioData from "./portfolioData.json";
import ItemPreview from "./ItemPreview.js"

function PortfolioGrid() {
  let [selectedTag, setSelectedTag] = useState(null);
  const allTags = [...new Set(portfolioData.flatMap(item => item.tags))];

  const itemsToShow = selectedTag 
    ? portfolioData.filter(item => item.tags.includes(selectedTag))
    : portfolioData;

  return (
    <div className="portfolio">
      <div className="filterButtons">
        {allTags.map(tag => (
          <button className="filterButton" key={tag} onClick={() => setSelectedTag(prevTag => prevTag === tag ? null : tag)}>
            {tag}
          </button>
        ))}
      </div>
      
      <div className="portfolioGrid">
        {itemsToShow.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <Link to={`/portfolio/${item.id}`}>More details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;