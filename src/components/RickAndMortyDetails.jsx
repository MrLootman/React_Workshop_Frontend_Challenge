import { useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const RickAndMortyDetails = () => {

    const {id} = useParams()

    console.log(useLocation())

    const [data, setData] = useState(undefined)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((rickAndMortyData) => setData(rickAndMortyData))
            .catch((err) => console.error(err))
    }, [])

    return (
        data !== undefined && (
        <div>
            {data.name}
        </div>
        )
    )
}

export default RickAndMortyDetails