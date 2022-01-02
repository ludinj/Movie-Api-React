import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
//Image

import SearchIcon from "../../images/search-icon.svg";

import React from "react";
import { Wrapper, Content } from "./SearchBar.style";

const SearchBar = ({ setSearchTearm }) => {
  const [state, setState] = useState("");

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTearm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTearm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Seach Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.prototypes = {
  setSearchTearm: PropTypes.func,
};

export default SearchBar;
