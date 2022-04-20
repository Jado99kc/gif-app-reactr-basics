import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../services/gifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const images = await getGifs(category);
      setImages(images);
    }
    fetchData();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((gif) => {
          return <GifGridItem key={gif.id} {...gif} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
