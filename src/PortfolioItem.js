import { useParams, useNavigate } from 'react-router-dom';
import portfolioData from "./portfolioData.json";

function PortfolioItem() {
    let {id} = useParams();

    return(
        <div className="portfolioItem">
            {id}
        </div>
    );
};

export default PortfolioItem;