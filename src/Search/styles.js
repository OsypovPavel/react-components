import styled from "styled-components";
import { variables } from "../assets/style/tools/variables";
import {
  appearanceNone,
  flexCenter,
  setSize,
  simpleIcon
} from "../assets/style/tools/mixin";
import { Search } from "../icons/Svg";
import { Close } from "../icons/Svg/Close";

const Style = {
  Wrap: styled.div`
    display: flex;
    flex: 1;
    position: relative;
    height: 52px;
    width: 100%;
    max-width: 460px;
    margin-right: ${props => props.mr || "0"};
    margin-bottom: ${props => props.mb || "0"};
  `,
  Input: styled.input`
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    color: ${variables.black};
    padding: 0 46px 0 46px;
    border-radius: 2px;
    border: 1px solid ${variables.border};
    background-color: white;
    ${appearanceNone()};
    &:hover {
      border-color: #a5b3c5;
    }
    &:focus {
      border-color: ${variables.accent};
    }
  `,
  Button: styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: absolute;
    z-index: 2;
    top: 1px;
    outline: none !important;
    ${props => (props.left ? "left: 1px" : "right: 1px")};
    padding: 0;
    ${setSize("40px", "calc(100% - 2px)")};
    ${flexCenter()};
    ${appearanceNone()};
    ${props =>
      props.fill
        ? `&:hover {
              path {
                fill: ${variables.accentHover};
              }
            }`
        : ""}
    &:active {
      background-color: ${props =>
        props.fill ? variables.lightHover : "transparent"};
      box-shadow: ${props =>
        props.fill ? "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)" : "none"};
    }
  `,
  SearchIcon: styled(Search)`
    ${simpleIcon("16px")};
    path {
      fill: ${variables.accentHover};
    }
  `,
  CloseIcon: styled(Close)`
    ${simpleIcon("16px")};
    path {
      fill: ${variables.border};
    }
  `
};

export { Style };
