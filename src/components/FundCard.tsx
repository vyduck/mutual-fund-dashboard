import { Link } from "react-router-dom";
import type { Fund } from "../pages/Home";
import "./FundCard.css";

function FundCard({ fund }: { fund: Fund }) {
    return (
        <div className="fund-card">
            <h3>{fund.name}</h3>
            <span className="fund-tags">
                <span className="fund-category">{fund.category}</span>
                <span className="fund-risk-level">{fund.risk_level}</span>
            </span>
            <p className="fund-price-per-unit">Price: <strong>Rs. {fund.price_per_unit}/unit</strong></p>
            <p className="fund-last-updated">Last Updated: <strong>{fund.last_updated}</strong></p>
            <Link to={`/view-fund/${fund.id}`} className="fund-link">View Details</Link>
        </div>
    );
}

export default FundCard;