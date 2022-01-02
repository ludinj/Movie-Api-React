import React from "react";
//styles
import { Wrapper } from "./Button.style";
import PropTypes from "prop-types";
const ButtonIndex = ({ text, callBack }) => {
  return (
    <Wrapper type="button" onClick={callBack}>
      {text}
    </Wrapper>
  );
};
ButtonIndex.prototypes = {
  text: PropTypes.string,
  callBack: PropTypes.func,
};
export default ButtonIndex;
