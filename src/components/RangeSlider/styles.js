import styled from "styled-components";
import { variables } from "@assets/style/tools/variables";
import {
  setSize,
  flexCenter,
  setWidth,
  setHeight,
  appearanceNone
} from "@assets/style/tools/mixin";

const Style = {
  Wrap: styled.div`
    display: block;
    position: relative;
    width: 100%;
    max-width: 240px;
    .rc-slider {
      position: relative;
      height: 14px;
      padding: 5px 0;
      width: 100%;
      border-radius: 6px;
      touch-action: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      &-rail {
        background-color: #dde4ea;
        border-radius: 8px;
        position: absolute;
        width: 100%;
        height: 4px;
      }
      &-track {
        position: absolute;
        left: 0;
        height: 4px;
        border-radius: 6px;
        background-color: ${variables.accent};
      }
      &-handle {
        ${setSize("16px")};
        margin-top: -6px;
        cursor: pointer;
        border-radius: 100%;
        border: 2px solid #ffffff;
        background-color: ${variables.accent};
        position: absolute;
        width: 14px;
        height: 14px;
        touch-action: pan-x;
        &:hover,
        &:active,
        &:focus {
          ${setSize("20px")};
          margin-top: -8px;
          outline: none !important;
        }
      }
      &-step {
        position: absolute;
        width: 100%;
        height: 4px;
        background: transparent;
      }
      &-mark {
        position: absolute;
        top: 18px;
        left: 0;
        width: 100%;
        font-size: 12px;
      }
    }
  `,
  Title: styled.span`
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${variables.black};
  `,
  TitleHint: styled.span`
    font-size: 12px;
    color: ${variables.black};
    ${setWidth("100%")};
    margin-bottom: 5px;
  `,
  FiledGroup: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 5px;
  `,
  Field: styled.input`
    display: block;
    flex-wrap: wrap;
    width: calc(50% - 10px);
    flex: calc(50% - 10px);
    max-width: 110px;
    ${setHeight("32px")};
    padding: 8px 15px;
    text-align: center;
    border: 1px solid ${variables.border};
    border-radius: 2px;
    font-size: 12px;
    color: ${variables.black};
    ${appearanceNone()};
    &:hover {
      border-color: #a5b3c5;
    }
    &:focus {
      border-color: ${variables.accentHover};
    }
  `,
  FieldPrefix: styled.span`
    font-weight: bold;
    color: #a5b3c5;
    ${flexCenter()};
    ${setWidth("20px")};
  `
};

export { Style };
