import React from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";

function Search({ value, placeholder, name, onChange, onSubmit, mb, mr }) {
  const fieldChange = e => {
    onChange(e.target.value);
  };
  const clearField = () => {
    value.trim() && onChange("");
  };
  const searchTrigger = () => {
    value.trim() && onSubmit();
  };
  const onKeyPress = e => {
    const keyCodePush = e.keyCode ? e.keyCode : e.which;
    if ((keyCodePush === 10 || keyCodePush === 13) && !e.shiftKey) {
      e.preventDefault();
      searchTrigger();
    }
  };
  return (
    <Style.Wrap mb={mb} mr={mr}>
      <Style.Button left onClick={searchTrigger} fill={value.trim()}>
        <Style.SearchIcon />
      </Style.Button>
      <Style.Input
        type={"text"}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={fieldChange}
        onKeyPress={onKeyPress}
      />
      <Style.Button right onClick={clearField} fill={value.trim()}>
        <Style.CloseIcon />
      </Style.Button>
    </Style.Wrap>
  );
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  mb: PropTypes.string,
  mr: PropTypes.string
};

export default Search;
