import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Switch } from "./styles";
import { Style } from "../Select/styles";

const Switcher = ({
  onChange,
  checked,
  title,
  statusTitle,
  className,
  disabled
}) => {
  const callBack = () => !disabled && onChange(!checked);
  const [positionHint, changePositionHint] = useState({
    clientX: 0,
    clientY: 0,
    display: "none"
  });
  const wrapperRef = useRef(null);
  const checkedTitle = checked
    ? (statusTitle && statusTitle.on) || "Вкл."
    : (statusTitle && statusTitle.off) || "Выкл.";
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
      <Switch.Wrap
        onClick={callBack}
        withTitle={!!title}
        className={className}
        ref={wrapperRef}
      >
        <Switch.ButtonWrap checked={checked} disabled={disabled}>
          <Switch.Button className="is--btn" />
          <Switch.StatusTitle checked={checked}>
            {checkedTitle}
          </Switch.StatusTitle>
        </Switch.ButtonWrap>
        {!!title && <Switch.Title>{title}</Switch.Title>}
      </Switch.Wrap>
    </React.Fragment>
  );
};

Switcher.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string,
  statusTitle: PropTypes.shape({
    on: PropTypes.string,
    off: PropTypes.string
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Switcher;
