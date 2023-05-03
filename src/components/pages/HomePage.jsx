import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard";

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((res) => setData(res.results))
            .catch((err) => console.error(err))
    }, [])

    return (
        <main className="home-page">
            <ul className="home-page_ul">
                {data.map((el) => {
                    return (
                        <RickAndMortyCard key={el.id} name={el.name} image={el.image} />
                    )
                })
                }

            </ul>
        </main>
    )
}

export default HomePage;