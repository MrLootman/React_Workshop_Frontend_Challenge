import { NavLink } from "react-router-dom";

function RickAndMortyCard({ name, image, id }) {
    return (
        <li className="rick-and-morty-card">
            <NavLink to={`/character/${id}`}>
                <img src={image} />
                <p>{name}</p>
            </NavLink>
        </li>
    )
}

export default RickAndMortyCard;