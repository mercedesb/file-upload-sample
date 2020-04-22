import React from "react";
import PropTypes from "prop-types";

export function FileInput({ name, inputRef }) {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input name={name} id={name} type="file" ref={inputRef} />
    </div>
  );
}

FileInput.propTypes = {
  name: PropTypes.string,
};
