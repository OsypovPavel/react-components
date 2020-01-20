import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";

const Checkbox = ({ onChange, checked, title, disabled, error, mb }) => {
  const [positionHint, changePositionHint] = useState({
    clientX: 0,
    clientY: 0,
    display: "none"
  });
  const wrapperRef = useRef(null);
  const listenMoveMouse = ({ clientX, clientY }) => {
    changePositionHint({
      clientX: clientX + 4,
      clientY: clientY + 2,
      display: "block"
    });
  };
  // ToDo @refact :preferable encapsulate to custom hook
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
  const callBack = () => {
    !disabled && onChange(!checked);
  };
  return (
    <React.Fragment>
      {disabled && (
        <Style.HintWrapper
          style={{
            top: positionHint.clientY,
            left: positionHint.clientX,
            display: positionHint.display
          }}
        >
          <Style.Hint>Данное поле невозможно заполнить</Style.Hint>
        </Style.HintWrapper>
      )}
      <Style.Wrapper
        onClick={callBack}
        withTitle={!!title}
        mb={mb}
        ref={wrapperRef}
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
    </React.Fragment>
  );
};
Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  mb: PropTypes.string
};
export default Checkbox;
