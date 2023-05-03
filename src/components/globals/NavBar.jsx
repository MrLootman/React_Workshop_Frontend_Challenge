import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <h2>Rick and Morty</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <h2>Contact Us</h2>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;