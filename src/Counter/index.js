import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Wrap,
  Input,
  BtnGroup,
  Button,
  IconUp,
  IconDown,
  HintWrapper,
  Hint
} from "./styles";
import { Switch } from "../Switcher/styles";

const Counter = ({ onChange, value, className, disabled }) => {
  const extraClasses = className ? ` ${className}` : "";
  const checkEmptyClasses = value < 1 ? ` is--empty` : "";
  const [positionHint, changePositionHint] = useState({
    clientX: 0,
    clientY: 0,
    display: "none"
  });
  const wrapperRef = useRef(null);
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
  const listenMoveMouse = ({ clientX, clientY }) => {
    changePositionHint({
      clientX: clientX + 4,
      clientY: clientY + 2,
      display: "block"
    });
  };
  const listenEnterMouse = event => {
    switch (event.type) {
      case "mouseover": {
        document.addEventListener("mousemove", listenMoveMouse);
        break;
      }
      case "mouseleave": {
        document.removeEventListener("mousemove", listenMoveMouse);
        changePositionHint({ clientX: 0, clientY: 0, display: "none" });
        break;
      }
      default:
        break;
    }
  };
  useEffect(() => {
    if (disabled) {
      wrapperRef.current.addEventListener("mouseover", listenEnterMouse);
      wrapperRef.current.addEventListener("mouseleave", listenEnterMouse);
    }
    return () => {
      if (disabled) {
        wrapperRef.current.removeEventListener("mouseover", listenEnterMouse);
        wrapperRef.current.removeEventListener("mouseleave", listenEnterMouse);
      }
    };
  }, []);
  return (
    <React.Fragment>
      {disabled && (
        <HintWrapper
          style={{
            top: positionHint.clientY,
            left: positionHint.clientX,
            display: positionHint.display
          }}
        >
          <Hint>Данное поле невозможно заполнить</Hint>
        </HintWrapper>
      )}
      <Wrap
        className={`${extraClasses}${checkEmptyClasses}`}
        ref={wrapperRef}
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
    </React.Fragment>
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
  disabled: PropTypes.bool
};
export default Counter;
