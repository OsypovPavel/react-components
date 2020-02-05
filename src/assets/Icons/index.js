import React from 'react';
import PropTypes from 'prop-types';

import ArrowDown from './ArrowDown';
import Lock from './Lock';
import Loupe from './Loupe';
import Garage from './Garage';
import Cart from './Cart';
import Compare from './Compare';
import Heart from './Heart';
import Percent from './Percent';
import ListLeft from './ListLeft';
import ListRight from './ListRight';
import Question from './Question';
import Steps from './Steps';
import Comment from './Comment';
import Share from './Share';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

const icons = {
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  Lock,
  Loupe,
  Garage,
  Cart,
  Compare,
  Heart,
  Percent,
  ListLeft,
  ListRight,
  Question,
  Steps,
  Comment,
  Share,
};
const Icon = (props) => {
  const Specification = icons[props.name];
  if (Specification) {
    return <Specification {...props} />;
  }
  console.warn(`There is no icon for ${props.name}`);
  return null;
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Icon;
