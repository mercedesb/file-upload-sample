import React from "react";
import PropTypes from "prop-types";

export function FileInput({ name }) {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input name={name} id={name} type="file" />
    </div>
  );
}

FileInput.propTypes = {
  name: PropTypes.string,
};
