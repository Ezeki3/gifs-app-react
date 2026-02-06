import { useState } from "react";
import GifList from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";

export default function GifsApp() {

    const [previousTerm, setPreviousTerm] = useState(['dragon']);

    const handleTermClicked = (term: string) => {
        console.log({ term });

    }

    return (
        <>
            {/* Header  */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el Gif perfecto"
            />

            {/* Search */}
            <SearchBar
                placeholder="Buscador de gifs"
            />

            {/* Busquedas previas */}
            <PreviousSearches
                onLabelClicked={handleTermClicked}
                searches={previousTerm}
            />

            {/* Gifs */}
            <GifList
                gifs={mockGifs}
            />
        </>
    )
}
