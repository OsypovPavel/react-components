import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowLeft,
  ArrowRigth,
  Logo,
  Heart,
  Libra,
  Instagram,
  Vk,
  Facebook,
  LogoWhite,
  ArrowRightFooter,
  File,
  Folder,
  Smile,
  Plus,
  Minus,
  EditPencil,
  Delete,
  Star,
  Comment,
  ArrowDown,
  ArrowUp,
  Doc,
  Pdf,
  QuestionMark,
  Excel,
} from './Svg';

const icons = {
  arrowRight: ArrowRigth,
  arrowRightFooter: ArrowRightFooter,
  arrowLeft: ArrowLeft,
  logo: Logo,
  heart: Heart,
  libra: Libra,
  instagram: Instagram,
  vk: Vk,
  facebook: Facebook,
  logoWhite: LogoWhite,
  file: File,
  folder: Folder,
  smile: Smile,
  plus: Plus,
  minus: Minus,
  editPencil: EditPencil,
  delete: Delete,
  comment: Comment,
  star: Star,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  doc: Doc,
  pdf: Pdf,
  questionMark: QuestionMark,
  excel: Excel,
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
export { Icon };
