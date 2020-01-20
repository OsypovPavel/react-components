import styled from "styled-components";
import { variables } from "../assets/style/tools/variables";
import {
  appearanceNone,
  customPlaceholder,
  flexCenter,
  setSize
} from "../assets/style/tools/mixin";
import InputMask from "react-input-mask";

const Style = {
  Wrap: styled.div`
    display: flex;
    flex: 1;
    position: relative;
    z-index: ${props => (props.zIndex ? props.zIndex : props.open ? "2" : "1")};
    height: ${props => (props.area ? "auto" : "44px")};
    max-width: ${props => props.mw || "100%"};
    margin-right: ${props => props.mr || "0"};
    margin-bottom: ${props => props.mb || "0"};
  `,
  Input: styled(InputMask)`
    display: block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    color: ${variables.black};
    padding: 0 15px;
    border-radius: 2px;
    border: 1px solid
      ${props => (props.disabled ? "#DDE4EA" : variables.border)};
    cursor: ${props => (props.disabled ? "pointer" : "initial")};
    background-color: white;
    outline: none !important;
    ${appearanceNone()};
    ${props =>
      props.disabled
        ? customPlaceholder(`
            color: #DDE4EA;
          `)
        : `&:hover {
            border-color: #a5b3c5;
          };
          ${customPlaceholder(`
            color: #A5B3C5;
            font-weight: normal;
          `)};
        `}
    &:focus {
      border-color: ${variables.accent};
    }
    ${props => (props.error ? `border-color: ${variables.red}!important` : "")};
  `,
  Area: styled.textarea`
    display: block;
    width: 100%;
    height: 150px;
    font-size: 14px;
    font-weight: 500;
    color: ${variables.black};
    padding: 15px 15px 0 15px;
    border-radius: 2px;
    border: 1px solid
      ${props => (props.disabled ? "#DDE4EA" : variables.border)};
    background-color: white;
    resize: none;
    font-family: ${variables.font};
    outline: none !important;
    ${appearanceNone()};
    ${props =>
      props.disabled
        ? customPlaceholder(`
            color: #DDE4EA;
          `)
        : `&:hover {
            border-color: #a5b3c5;
          };
          ${customPlaceholder(`
            color: #A5B3C5;
            font-weight: normal;
          `)};
        `}
    &:focus {
      border-color: ${variables.accent};
    }
    ${props => (props.error ? `border-color: ${variables.red}!important` : "")};
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
    transform: translateY(3px);
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
      padding-left: 1px;
      ${setSize("10px")};
      ${flexCenter()};
    }
  `
};

export { Style };
