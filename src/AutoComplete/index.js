import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";

export default function AutoComplete({
  value,
  placeholder,
  list,
  name,
  disabled,
  onChange,
  mb,
  mr,
  zIndex
}) {
  const [open, stateOpen] = useState(false);
  const [positionHint, changePositionHint] = useState({
    clientX: 0,
    clientY: 0,
    display: "none"
  });
  // ToDo @refact :preferable encapsulate to custom hook
  const pickElement = value => () => {
    onChange(value.name);
    stateOpen(false);
  };
  const fieldChange = e => {
    stateOpen(true);
    onChange(e.target.value);
  };
  const triggerState = () => {
    !disabled && stateOpen(true);
  };
  const wrapperRef = useRef(null);

  const clickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      stateOpen(false);
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
    } else {
      document.addEventListener("mousedown", clickOutside);
    }
    return () => {
      if (disabled) {
        wrapperRef.current.removeEventListener("mouseover", listenEnterMouse);
        wrapperRef.current.removeEventListener("mouseleave", listenEnterMouse);
      } else {
        document.removeEventListener("mousedown", clickOutside);
      }
    };
  }, []);
  const filtered = list.filter(item => {
    return item.name.toLowerCase().includes(value.trim().toLowerCase());
  });
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
      <Style.Wrap mb={mb} mr={mr} open={open} zIndex={zIndex} ref={wrapperRef}>
        <Style.Point disabled={disabled} />
        <Style.Input
          type={"text"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={fieldChange}
          readOnly={disabled}
          disabled={disabled}
          onClick={triggerState}
        />
        {filtered.length > 0 && !disabled && (
          <Style.Scrollbar noScrollX open={open} count={filtered.length}>
            <Style.List>
              {filtered.length === 1 && value.trim() && (
                <Style.ListItem onClick={pickElement({ name: "" })}>
                  Очистить
                </Style.ListItem>
              )}
              {filtered.map(
                (item, index) =>
                  value.trim() !== item.name && (
                    <Style.ListItem
                      key={`${item.name}_${index}`}
                      onClick={pickElement(item)}
                    >
                      <Style.Flag position={item.id} />
                      {item.name}
                    </Style.ListItem>
                  )
              )}
            </Style.List>
          </Style.Scrollbar>
        )}
      </Style.Wrap>
    </React.Fragment>
  );
}

AutoComplete.propTypes = {
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  mb: PropTypes.string,
  mr: PropTypes.string,
  zIndex: PropTypes.string,
  disabled: PropTypes.bool
};
