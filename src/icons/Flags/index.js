import * as React from 'react';
import PropTypes from 'prop-types';
import { Romania } from './Romania';
import { Default } from './Default';

const icons = {
  ro: Romania,
  default: Default,
};

const FlagIcon = (props) => {
  const Specification = icons[props.name] || icons.default;
  return <Specification {...props} />;
};
FlagIcon.defaultProps = {
  name: 'default',
};
FlagIcon.propTypes = {
  name: PropTypes.string,
};
export default FlagIcon;
