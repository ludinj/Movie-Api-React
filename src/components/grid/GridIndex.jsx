import { Wrapper, Content } from "./Grid.style";

import React from "react";

import PropTypes from "prop-types";
const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Grid.prototypes = {
  header: PropTypes.string,
};
export default Grid;
