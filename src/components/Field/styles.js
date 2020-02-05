import styled from "styled-components";
import { variables } from "@assets/style/tools/variables";
import {
  appearanceNone,
  customPlaceholder,
  flexCenter,
  setSize
} from "@assets/style/tools/mixin";
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
  `
};

export { Style };
