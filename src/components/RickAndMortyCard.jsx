import { NavLink, useNavigate } from "react-router-dom";

function RickAndMortyCard({ name, image, id }) {

    const navigate = useNavigate()

    return (
        <button onClick={() => {navigate(`/characters/${id}`, {state : {name, image, id}})   }}>
            <li className="rick-and-morty-card">
            <img src={image} />
            <p>{name}</p>
        </li>

        </button>
    )
}

export default RickAndMortyCard;