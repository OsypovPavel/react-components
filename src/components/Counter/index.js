import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Wrap,
  Input,
  BtnGroup,
  Button,
  IconUp,
  IconDown,
} from "./styles";
import withTooltip from "@shared/hoc/withTooltip";

const Counter = ({ onChange, value, className, disabled, setRef }) => {
  const extraClasses = className ? ` ${className}` : "";
  const checkEmptyClasses = value < 1 ? ` is--empty` : "";
  const changeValue = {
    plus: () => {
      if (+value < 1000) !disabled && onChange(+value + 1);
    },
    minus: () => {
      if (+value > 0) !disabled && onChange(+value - 1);
    },
    field: event => {
      if (+event.target.value > 0 && +event.target.value < 1000)
        !disabled && onChange(+event.target.value);
    }
  };
  return (
    <Wrap
      className={`${extraClasses}${checkEmptyClasses}`}
      ref={setRef}
      disabled={disabled}
    >
      <Input
        type="number"
        min={0}
        max={999}
        value={value}
        onChange={changeValue.field}
        className="field"
        disabled={disabled}
        readOnly={disabled}
      />
      <BtnGroup className="btn--group">
        <Button onClick={changeValue.plus}>
          <IconUp className="btn--icon" />
        </Button>
        <Button onClick={changeValue.minus}>
          <IconDown className="btn--icon" />
        </Button>
      </BtnGroup>
    </Wrap>
  );
};
Counter.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  value: PropTypes.number,
  statusTitle: PropTypes.shape({
    on: PropTypes.string,
    off: PropTypes.string
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  setRef: PropTypes.object.isRequired
};
export default withTooltip(Counter);
