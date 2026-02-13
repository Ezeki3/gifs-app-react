import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

export const useGif = () => {

  const [previousTerm, setPreviousTerm] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs)
  }

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;
    if (previousTerm.includes(query)) return;

    setPreviousTerm([query, ...previousTerm].splice(0, 8));

    const gifs = await getGifsByQuery(query)
    setGifs(gifs);
  }
  return {
    // Values
    previousTerm,
    gifs,

    // Functions
    handleTermClicked,
    handleSearch
  }
}
