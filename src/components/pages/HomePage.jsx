import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard";

function HomePage() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((res) => setData(res.results))
            .catch((err) => console.error(err))
    }, [])

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    return (
        <main className="home-page">
            <select className="home-page_select" onChange={handleChange}>
                <option>...</option>
                {data.map((el) => {
                    return (
                        <option key={el.id}>{el.name}</option>
                    )
                })
                }
            </select>

            <ul className="home-page_ul">
                {data
                    .filter((el) => selectedValue === "..." || selectedValue === el.name)
                    .map((el) => {
                    return (
                        <RickAndMortyCard key={el.id} id={el.id} name={el.name} image={el.image} />
                    )
                })
                }

            </ul>
        </main>
    )
}

export default HomePage;