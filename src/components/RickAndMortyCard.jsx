function RickAndMortyCard({ name, image }) {
    return (
        <li className="rick-and-morty-card">
            <img src={image} />
            <p>{name}</p>
        </li>
    )
}

export default RickAndMortyCard;