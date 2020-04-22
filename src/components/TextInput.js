import React from "react";
import PropTypes from "prop-types";

export function TextInput({ name, value, placeholder, onChange }) {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChnage: PropTypes.func,
};
