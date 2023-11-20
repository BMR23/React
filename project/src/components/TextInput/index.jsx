import "./style.css";
import P from "prop-types";
import React from "react";

export const TextInput = ({ onChange, value, type }) => {
  return <input onChange={onChange} value={value} type={type} placeholder="Type your search" />;
};

TextInput.defaultProps = {
  value: "",
};

TextInput.propTypes = {
  onChange: P.func.isRequired,
  value: P.string,
  type: P.string,
};
