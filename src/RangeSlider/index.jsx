import React from "react";
import PropTypes from "prop-types";
import Range from "rc-slider/lib/Range";
import { Style } from "./styles";

function RangeSlider({
  min = 0,
  max = 10000,
  step = 1,
  title,
  titleHint,
  value,
  onChange
}) {
  const changeField = {
    from: e => {
      const newValue = e.target.value;
      if (+newValue >= min && +newValue < value[1])
        onChange([+newValue, value[1]]);
      console.warn([+newValue, value[1]]);
    },
    to: e => {
      const newValue = e.target.value;
      if (+newValue <= max && +newValue > value[0])
        onChange([value[0], +newValue]);
      console.warn([value[0], +newValue]);
    }
  };
  return (
    <Style.Wrap>
      {!!title && <Style.Title>{title}</Style.Title>}
      <Range
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
      />
      <Style.FiledGroup>
        <Style.TitleHint>{titleHint}</Style.TitleHint>
        <Style.Field
          value={value[0]}
          onChange={changeField.from}
          type={"number"}
          step={step}
        />
        <Style.FieldPrefix>-</Style.FieldPrefix>
        <Style.Field
          value={value[1]}
          onChange={changeField.to}
          type={"number"}
          step={step}
        />
      </Style.FiledGroup>
    </Style.Wrap>
  );
}

RangeSlider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  title: PropTypes.string,
  titleHint: PropTypes.string
};

export default RangeSlider;
