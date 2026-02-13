import GifList from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGif } from "./gifs/hooks/useGif";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";

export default function GifsApp() {

    const { previousTerm, gifs, handleTermClicked, handleSearch } = useGif()

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
