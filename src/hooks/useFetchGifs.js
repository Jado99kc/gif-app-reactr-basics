import { useEffect, useState } from "react";
import { getGifs } from "../services/gifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    gifs: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((gifs) => setState({ loading: false, gifs: gifs }));
  }, [category]);

  return state;
};
