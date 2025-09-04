import React, { useEffect, useState } from "react";
import "./Home.css";

import FundCard from "../components/FundCard";
import { Link } from "react-router-dom";

export type Fund = {
    id: string;
    name: string;
    category: "Equity" | "Debt" | "Hybrid" | "Index";
    sub_category: string;
    risk_level: "Very Low" | "Low" | "Medium" | "High" | "Very High";
    price_per_unit: number;
    last_updated: string;

    benchmark: string;
    expense_ratio: number;
    returns: {
        "1Y": number;
        "3Y": number;
        "5Y": number;
    };

    holdings: {
        label: string;
        type: "Stock" | "Bond" | "Cash";
        units?: number;
        price_per_unit?: number;
        total: number;
    }[];

    portfolio_value: number;
};

const Home: React.FC = () => {
    const [funds, setFunds] = useState<Fund[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("./sample-funds.json")
            .then((response) => response.json())
            .then((data) => {
                setFunds(Object.values(data));
                setLoading(false);
            });
    }, []);

    return (
        <div className="home-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {
                        funds.map((fund) => (
                            <FundCard key={fund.name} fund={fund} />
                        ))
                    }
                    <Link to="/create-fund" className="fund-card create-new-fund">
                        <span> + Add New Fund</span>
                    </Link>
                </>
            )}

        </div>
    );
};

export default Home;