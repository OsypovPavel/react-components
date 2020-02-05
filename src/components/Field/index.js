import React from "react";
import withTooltip from "@shared/hoc/withTooltip";
import PropTypes from "prop-types";
import { Style } from "./styles";

function Field({
  value,
  placeholder,
  name,
  type = "text",
  disabled,
  error,
  area,
  onChange,
  mb,
  mr,
  mw,
  setRef,
  eventType
  }) {
  const fieldChange = e => {
    const value = eventType ? e : e.target.value;
    onChange(value);
  };
  return (
    <Style.Wrap mb={mb} mr={mr} mw={mw} area={area} ref={setRef}>
      {area ? (
        <Style.Area
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={fieldChange}
          readOnly={disabled}
          disabled={disabled}
          error={error}
        />
      ) : (
        <Style.Input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={fieldChange}
          readOnly={disabled}
          disabled={disabled}
          error={error}
          ref={setRef}
          mask={type === "tel" ? "+38(099) 99 99 999" : false}
        />
      )}
      {!!error && <Style.Error>{error}</Style.Error>}
    </Style.Wrap>
  );
}

Field.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  mb: PropTypes.string,
  mr: PropTypes.string,
  mw: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  area: PropTypes.bool,
  eventType: PropTypes.bool
};

export default withTooltip(Field);