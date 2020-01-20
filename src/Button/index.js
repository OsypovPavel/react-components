import React from "react";
import PropTypes from "prop-types";
import { Wrap } from "./styles";

const Button = ({
  children,
  type = "button",
  theme = "primary",
  onClick,
  disabled,
  mr
}) => {
  return (
    <Wrap
      theme={theme}
      type={type}
      onClick={onClick}
      disabled={disabled}
      mr={mr}
    >
      {children}
    </Wrap>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.bool,
  mr: PropTypes.string
};

export default Button;
