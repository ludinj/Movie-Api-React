import { Link } from "react-router-dom";
import { Image } from "./Tumb.style";
import React from "react";
import PropTypes from "prop-types";
const Tumb = ({ image, movieId, cliakable }) => {
  return (
    <div>
      {cliakable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-tumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-tumb" />
      )}
    </div>
  );
};

Tumb.prototypes = {
  image: PropTypes.string,
  movieId: PropTypes.string,
  cliakable: PropTypes.bool,
};
export default Tumb;
