import React, { useEffect, useState, useRef } from "react";
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
  mw
}) {
  const [positionHint, changePositionHint] = useState({
    clientX: 0,
    clientY: 0,
    display: "none"
  });
  const fieldChange = e => {
    onChange(e.target.value);
  };
  const wrapperRef = useRef(null);
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
      <Style.Wrap mb={mb} mr={mr} mw={mw} ref={wrapperRef} area={area}>
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
            mask={type === "tel" ? "+38(099) 99 99 999" : false}
          />
        )}
        {!!error && <Style.Error>{error}</Style.Error>}
      </Style.Wrap>
    </React.Fragment>
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
  area: PropTypes.bool
};

export default Field;
