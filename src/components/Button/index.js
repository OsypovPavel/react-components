import React from "react";
import PropTypes from "prop-types";
import { Wrap } from "./styles";
import withTooltip from "@shared/hoc/withTooltip";

const Button = ({
  children,
  type = "button",
  theme = "primary",
  onClick,
  disabled,
  mr,
  setRef
}) => {
  return (
    <Wrap
      theme={theme}
      type={type}
      onClick={onClick}
      disabled={disabled}
      mr={mr}
      ref={setRef}
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
  mr: PropTypes.string,
  setRef: PropTypes.object.isRequired
};

export default withTooltip(Button);
