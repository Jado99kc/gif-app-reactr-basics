import { GIFY_API_URL } from "../constants/api";

export const getGifs = async (category) => {
  const url = `${GIFY_API_URL}&q=${category}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
};
