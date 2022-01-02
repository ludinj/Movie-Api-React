import React from "react";
import PropTypes from "prop-types";
//styles

import { Wrapper, Image } from "./Actor.style";
const ActorIndex = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-tumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

ActorIndex.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default ActorIndex;
