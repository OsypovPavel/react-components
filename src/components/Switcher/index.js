import React from "react";
import PropTypes from "prop-types";
import { Switch } from "./styles";
import withTooltip from "@shared/hoc/withTooltip";

const Switcher = ({
  onChange,
  checked,
  title,
  statusTitle,
  className,
  disabled,
  setRef
}) => {
  const callBack = () => !disabled && onChange(!checked);
  const checkedTitle = checked
    ? (statusTitle && statusTitle.on) || "Вкл."
    : (statusTitle && statusTitle.off) || "Выкл.";
  return (
    <Switch.Wrap
      onClick={callBack}
      withTitle={!!title}
      className={className}
      ref={setRef}
    >
      <Switch.ButtonWrap checked={checked} disabled={disabled}>
        <Switch.Button className="is--btn" />
        <Switch.StatusTitle checked={checked}>
          {checkedTitle}
        </Switch.StatusTitle>
      </Switch.ButtonWrap>
      {!!title && <Switch.Title>{title}</Switch.Title>}
    </Switch.Wrap>
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
  disabled: PropTypes.bool,
  setRef: PropTypes.object.isRequired
};

export default withTooltip(Switcher);
