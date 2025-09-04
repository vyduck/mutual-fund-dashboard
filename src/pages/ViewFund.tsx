import { useParams } from "react-router-dom";
import type { Fund } from "./Home";
import { useEffect, useState } from "react";
import "./ViewFund.css";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

function ViewFund() {
    const [fund, setFund] = useState<Fund | null>(null);
    const [loading, setLoading] = useState(true);
    const { fundName } = useParams<{ fundName: string }>();

    useEffect(() => {
        fetch("../sample-funds.json")
            .then((response) => response.json())
            .then((funds: Record<string, Fund>) => {
                setFund(funds[fundName!] || null);
                setLoading(false);
            });
    }, [fundName]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="view-fund-container">
                {fund ? (
                    <>
                        <h2 className="fund-title">{fund.name}</h2>
                        <div className="fund-details">
                            <p><strong>Category:</strong> {fund.category} ({fund.sub_category})</p>
                            <p><strong>Risk Level:</strong> {fund.risk_level}</p>
                            <p><strong>Price per Unit:</strong> ₹{fund.price_per_unit.toLocaleString()}</p>
                            <p><strong>Portfolio Value:</strong> ₹{fund.portfolio_value.toLocaleString()}</p>
                            <p><strong>Last Updated:</strong> {fund.last_updated}</p>
                            <p><strong>Benchmark:</strong> {fund.benchmark}</p>
                            <p><strong>Expense Ratio:</strong> {fund.expense_ratio}%</p>
                        </div>
                        <div className="fund-returns">
                            <h3>Returns</h3>
                            <ul>
                                <li>1Y: {fund.returns["1Y"]}%</li>
                                <li>3Y: {fund.returns["3Y"]}%</li>
                                <li>5Y: {fund.returns["5Y"]}%</li>
                            </ul>
                        </div>
                        <ResponsiveContainer width="100%" height={400}>
                            {/* @ts-ignore */}
                            <PieChart width="100%" height={400}>
                                <Pie data={fund.holdings.map(holding => ({ name: holding.label, value: holding.total }))} label={({ name }) => name} />
                            </PieChart>
                        </ResponsiveContainer>
                    </>
                ) : (
                    <p>Fund not found</p>
                )}
            </div>
            <div className="side-panel"></div>
        </>
    );
}

export default ViewFund;