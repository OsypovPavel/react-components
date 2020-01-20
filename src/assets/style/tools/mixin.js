const mainBlock = () => {
  return `width: 100%;
  max-width: 1430px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;`;
};
const setWidth = (width) => {
  return `
    width: ${width};
    min-width: ${width};
    max-width: ${width};
    flex: 0 ${width};
  `;
};
const setHeight = (height) => {
  return `
    height: ${height};
    min-height: ${height};
    max-height: ${height};
  `;
};
const setSize = (width, height = false) => {
  return setWidth(width) + setHeight(height || width);
};
const simpleIcon = (width, height = false) => {
  return `display: block; ${setSize(width, height)}`;
};
const translate = (horizontal, vertical = false) => {
  return `transform: translate(${horizontal},${vertical || horizontal})`;
};
const flexCenter = () => {
  return `
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  `;
};
const maxContent = () => {
  return `
  max-width: max-content;
  max-height: max-content;
  `;
};
const scrollBarThis = () => {
  return `
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #bababa;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: $grey;
  }
  `;
};
const transitionCustom = (sek) => {
  return `
  transition: ${sek} ease-out;
  `;
};
const transition = (custom) => {
  return `
  transition: ${custom || '.3s'} ease-out;
  `;
};
const transitionElastic = () => {
  return `
  transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
  `;
};
const textEllipsis = () => {
  return `
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  `;
};
const customPlaceholder = (content) => {
  return `
  &::-webkit-input-placeholder {
    ${content}
  }

  &::-moz-placeholder {
    ${content}
  }

  &:-ms-input-placeholder {
    ${content}
  }

  &:-moz-placeholder {
    ${content}
  }
  `;
};
const focusPlaceholder = () => {
  return `${customPlaceholder(
    `
    ${transition()};
    opacity: .7;
    `,
  )}
    &:focus {
      ${customPlaceholder(`
        text-indent: 15px;
        opacity: 0;
      `)}
    }
  `;
};
const appearanceNone = () => {
  return `
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  `;
};
const activeButton = () => {
  return `
  &:active{
    box-shadow: inset 1px 1px 3px 0 rgba(0,0,0,.4);
    transition: none;
  }
  `;
};
const flex = (justify = 'flex-start', align = 'flex-start', direction = 'row') => {
  return `display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};`;
};

const respondTo = (size, content) => {
  switch (size) {
    case 'lg':
      `@media only screen and (max-width: 1199px){${content}}`;
      break;
    case 'md':
      `@media only screen and (max-width: 991px){${content}}`;
      break;
    case 'sm':
      `@media only screen and (max-width: 767px){${content}}`;
      break;
    case 'xs':
      `@media only screen and (max-width: 574px){${content}}`;
      break;
    case 'xss':
      `@media only screen and (max-width: 400px){${content}}`;
      break;
    default:
      `@media only screen and (max-width: ${size}){${content}}`;
  }
};

export {
  setWidth,
  setHeight,
  setSize,
  simpleIcon,
  flexCenter,
  scrollBarThis,
  transitionCustom,
  transition,
  appearanceNone,
  translate,
  customPlaceholder,
  focusPlaceholder,
  activeButton,
  flex,
  maxContent,
  mainBlock,
  textEllipsis,
  transitionElastic,
};
