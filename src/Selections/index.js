import React from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";

function Selections({ list, onClick, mb }) {
  const onClickElement = value => () => {
    onClick(value);
  };
  return (
    <Style.List mb={mb}>
      {list.map((item, index) => (
        <Style.Item
          key={`${item.name}_${index}`}
          onClick={onClickElement(item)}
        >
          {item.name}
          <Style.Close />
        </Style.Item>
      ))}
    </Style.List>
  );
}

Selections.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  mb: PropTypes.string
};

export default Selections;
