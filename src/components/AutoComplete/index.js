import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";
import withTooltip from "@shared/hoc/withTooltip";

// ToDo Compose this component in two HOC [withToolTip, clickOutside]
function AutoComplete({
  value,
  placeholder,
  list,
  name,
  disabled,
  onChange,
  mb,
  mr,
  zIndex,
  setRef
}) {
  const [open, stateOpen] = useState(false);
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
  // const wrapperRef = useRef(null);

  // const clickOutside = event => {
  //   if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //     stateOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   if (!disabled) {
  //     document.addEventListener("mousedown", clickOutside);
  //   }
  //   return () => {
  //     if (!disabled) {
  //       document.removeEventListener("mousedown", clickOutside);
  //     }
  //   };
  // }, []);
  const filtered = list.filter(item => {
    return item.name.toLowerCase().includes(value.trim().toLowerCase());
  });
  return (
    <Style.Wrap mb={mb} mr={mr} open={open} zIndex={zIndex} ref={setRef}>
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
export default withTooltip(AutoComplete)