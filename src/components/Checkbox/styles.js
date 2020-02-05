import styled from "styled-components";
import { variables } from "@assets/style/tools/variables";
import {
  setSize,
  flexCenter,
  simpleIcon,
  transitionCustom
} from "@assets/style/tools/mixin";
import { Check } from "@icons/Svg/Check";

const Style = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    flex: 1;
    position: relative;
    margin-bottom: ${props => props.mb || "0"};
    ${props =>
      props.withTitle
        ? ``
        : `
          max-width: max-content;
          max-height: max-content;
        `}
  `,
  Box: styled.div`
    ${flexCenter()};
    ${setSize("16px")};
    border-radius: 2px;
    background-color: ${variables.white};
    border: 1px solid
      ${props => (props.disabled ? variables.disabled : variables.border)};
    ${props =>
      !props.disabled && props.checked
        ? `
          background-color: ${variables.accent};
          border-color: ${variables.accent};
          `
        : ""}
    &:hover {
      border-color: ${variables.border}!important;
      border-width: 2px !important;
    }
    ${props =>
      props.error && !props.checked
        ? `border-color: ${variables.red}!important`
        : ""};
  `,
  Icon: styled(Check)`
    ${simpleIcon("8px")};
    ${transitionCustom(".1s")};
    transform: scale(${props => (props.checked ? "1" : "0")});
  `,
  Title: styled.span`
    display: block;
    color: ${props => (props.disabled ? "#A5B3C5" : variables.black)};
    font-size: 14px;
    flex: 1;
    margin-left: 10px;
    user-select: none;
    font-weight: ${props => (props.checked ? "bold" : "normal")};
  `,
  HintWrapper: styled.div`
    position: fixed;
    z-index: 3;
    display: block;
    top: 0;
    left: 0;
    ${setSize("1px")};
  `,
  Hint: styled.div`
    position: absolute;
    top: 35px;
    right: -27px;
    font-size: 12px;
    border-radius: 2px;
    display: block;
    width: 112px;
    line-height: 1.36;
    background-color: ${variables.black};
    color: #dde4ea;
    padding: 10px 15px;
    &::before {
      display: block;
      content: "";
      height: 0;
      width: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid ${variables.black};
      position: absolute;
      right: 20px;
      bottom: 100%;
    }
  `,
  Error: styled.span`
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(4px);
    font-size: 12px;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${variables.red};
    padding: 0 4px;
    &::before {
      content: "!";
      font-weight: bold;
      margin-right: 8px;
      background-color: ${variables.red};
      color: white;
      font-size: 6px;
      border-radius: 100%;
      ${setSize("10px")};
      ${flexCenter()};
    }
  `
};
export { Style };
