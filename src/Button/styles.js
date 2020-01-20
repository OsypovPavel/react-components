import styled from "styled-components";
import { variables } from "../assets/style/tools/variables";
import {
  appearanceNone,
  flexCenter,
  transition
} from "../assets/style/tools/mixin";
const checkTheme = theme => {
  switch (theme) {
    case "secondary": {
      return `
    color: ${variables.accent};
    background-color: transparent;
    border: 1px solid ${variables.accent};
    &:hover:not(:disabled) {
      color: #fff;
      background-color: ${variables.accent};
    }
    &:active:not(:disabled) {
      color: #ffffff;
      background-color: ${variables.accentActive}!important;
      outline: none!important;
      border-color: ${variables.accentActive}!important;
    }
    &:focus:not(:disabled) {
      color: #fff;
      background-color: ${variables.accent};
      outline: 1px solid ${variables.accent}
      border-color: #ffffff
    }
  `;
    }
    case "success": {
      return `
        color: ${variables.green};
        background-color: #fff;
        border: 1px solid ${variables.green};
        &:hover:not(:disabled) {
          color: #fff;
          background-color: ${variables.green};
        }
        &:active:not(:disabled) {
          color: #ffffff;
          background-color: ${variables.darkGreen}!important;
          outline: none!important;
          border-color: ${variables.green}!important;
        }
        &:focus:not(:disabled) {
          color: #fff;
          background-color: ${variables.darkGreen};
          outline: 1px solid ${variables.darkGreen}
          border-color: #ffffff
        }
    `;
    }
    case "primary": {
      return `
      color: #fff;
      background-color: ${variables.accent};
      border: 1px solid ${variables.accent};
      &:hover:not(:disabled) {
        color: #fff;
        background-color: ${variables.accentHover};
      }
      &:active:not(:disabled) {
        color: #ffffff;
        background-color: ${variables.accentActive}!important;
        outline: none!important;
        border-color: ${variables.accentActive}!important;
      }
      &:focus:not(:disabled) {
        color: #fff;
        background-color: ${variables.accent};
        outline: 1px solid ${variables.accent}
        border-color: #ffffff
      }
  `;
    }
    default:
      break;
  }
};

const Wrap = styled.button`
  ${flexCenter()};
  height: 40px;
  padding: 0 25px;
  font-size: 15px;
  cursor: pointer;
  min-width: 128px;
  border-radius: 2px;
  margin-right: ${props => props.mr || 0};
  outline: none !important;
  ${transition(".1s")};
  ${appearanceNone()};
  user-select: none;
  ${props => checkTheme(props.theme)};
  ${props =>
    props.disabled
      ? `
        background-color: #DDE4EA;
        border-color: #DDE4EA!important;
        color: #A5B3C5;
        cursor: not-allowed;
        `
      : ""};
`;

export { Wrap };
