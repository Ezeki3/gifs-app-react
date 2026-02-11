import { useState } from "react";
import GifList from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export default function GifsApp() {

    const [previousTerm, setPreviousTerm] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });

    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;
        if (previousTerm.includes(query)) return;

        setPreviousTerm([query, ...previousTerm].splice(0, 8));

        const gifs = await getGifsByQuery(query)
        setGifs(gifs);
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
                onQuery={handleSearch}
            />

            {/* Busquedas previas */}
            <PreviousSearches
                onLabelClicked={handleTermClicked}
                searches={previousTerm}
            />

            {/* Gifs */}
            <GifList
                gifs={gifs}
            />
        </>
    )
}
