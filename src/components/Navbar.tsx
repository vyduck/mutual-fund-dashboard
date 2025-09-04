import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav>
                <h3>Mutual Funds Dashboard</h3>
                <span id="nav-links">
                    <Link to="/">Home</Link>{" "}
                </span>
            </nav>
        </>
    )
}

export default Navbar;