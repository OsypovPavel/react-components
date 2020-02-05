import React from "react";
import withTooltip from "@shared/hoc/withTooltip";
import PropTypes from "prop-types";
import { Style } from "./styles";

function Checkbox({ onChange, checked, title, disabled, error, mb, setRef }) {
  const callBack = () => {
    !disabled && onChange(!checked);
  };
  return (
    <Style.Wrapper
      onClick={callBack}
      withTitle={!!title}
      mb={mb}
      ref={setRef}
    >
      <Style.Box checked={checked} disabled={disabled} error={!!error}>
        <Style.Icon checked={!disabled && checked} />
      </Style.Box>
      {!!title && (
        <Style.Title checked={!disabled && checked} disabled={disabled}>
          {title}
        </Style.Title>
      )}
      {!!error && !checked && <Style.Error>{error}</Style.Error>}
    </Style.Wrapper>
  );
};
Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  mb: PropTypes.string,
  setRef: PropTypes.object.isRequired
};
export default withTooltip(Checkbox);
