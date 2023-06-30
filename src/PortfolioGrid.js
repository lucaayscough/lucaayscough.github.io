import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemPreview from "./ItemPreview.js"

function PortfolioGrid({portfolioData}) {
    return (
        <div>
            {portfolioData.map((item) => (
                <div key={item.id}>
                    <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <Link to={`/portfolio/${item.id}`}>More details</Link>
                </div>
            ))}
        </div>
    );
};

export default PortfolioGrid;