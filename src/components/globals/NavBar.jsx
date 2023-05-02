import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        Rick and Morty
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact us
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar;