import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard";

function HomePage() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((rickAndMortyData) => setData(rickAndMortyData.results))
            .catch((err) => console.error(err))
    }, []);

    function handleSelect(e) {
        setSelectedValue(e.target.value)
    }

    return (
        <main className="home-page">
            <select className="home-page_select" onChange={handleSelect}>
                <option>...</option>
                {data.map((element) => {
                    return (
                        <option>{element.name}</option>
                    )
                })
                }
            </select>

            <ul className="home-page_ul">
                {data
                    .filter((element) => selectedValue === "..." || element.name === selectedValue)
                    .map((element) => {
                    return (
                        <RickAndMortyCard name={element.name} image={element.image} id={element.id}/>
                    )
                })

                }
            </ul>
        </main>
    )
}

export default HomePage;