import React from "react";
import { Link } from "react-router-dom";
import { Content, Wrapper } from "./Bread.style";
import PropTypes from "prop-types";
const BreadCrump = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};
BreadCrump.propTypes = {
  movieTitle: PropTypes.string,
};
export default BreadCrump;
