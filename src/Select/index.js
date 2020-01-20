import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";

function Select({
  selected,
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
  const showList = list.length > 0 && !disabled;
  const dataWithObjects = typeof list[0] === "object";
  const currentValue = dataWithObjects ? selected.name : selected;
  // ToDo @refact :preferable encapsulate to custom hook
  const pickElement = selected => () => {
    onChange(selected);
    stateOpen(false);
  };
  const triggerState = () => {
    !disabled && stateOpen(!open);
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
        <Style.Placeholder
          open={open}
          onClick={triggerState}
          disabled={disabled}
        >
          {currentValue || placeholder}
          <input type="text" name={name} hidden />
          <Style.Button disabled={disabled}>
            <Style.Arrow />
          </Style.Button>
        </Style.Placeholder>
        {showList && (
          <Style.Scrollbar noScrollX open={open} count={list.length}>
            <Style.List>
              {list.map((item, index) => {
                const name = dataWithObjects ? item.name : item;
                return (
                  currentValue !== name && (
                    <Style.ListItem
                      key={`${name}_${index}`}
                      onClick={pickElement(item)}
                    >
                      {name}
                    </Style.ListItem>
                  )
                );
              })}
            </Style.List>
          </Style.Scrollbar>
        )}
      </Style.Wrap>
    </React.Fragment>
  );
}

Select.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  mb: PropTypes.string,
  mr: PropTypes.string,
  zIndex: PropTypes.string,
  disabled: PropTypes.bool
};

export default Select;
