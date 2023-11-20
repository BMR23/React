import "./style.css";
import P from "prop-types";
import React from "react";

export const Button = ({ onClick, text, disabled }) => {
  return (
    <div className="container-button">
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
