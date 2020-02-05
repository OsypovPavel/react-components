import styled from "styled-components";
import { variables } from "@assets/style/tools/variables";
import {
  appearanceNone,
  flexCenter,
  simpleIcon,
  setSize,
  textEllipsis
} from "@assets/style/tools/mixin";
import Scrollbar from "react-scrollbars-custom";
import { ArrowDown } from "@icons/Svg/ArrowDown";

const Style = {
  Wrap: styled.div`
    display: flex;
    flex: 1;
    background-color: white;
    position: relative;
    z-index: ${props => (props.zIndex ? props.zIndex : props.open ? "2" : "1")};
    height: 44px;
    max-width: 240px;
    margin-right: ${props => props.mr || "0"};
    margin-bottom: ${props => props.mb || "0"};
    cursor: pointer;
    * {
      cursor: pointer;
    }
  `,
  Button: styled.button`
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    border-left: 1px solid transparent;
    outline: none !important;
    &:hover {
      background-color: ${props =>
        props.disabled ? "transparent" : variables.lightHover};
    }
    ${setSize("40px", "100%")};
    ${flexCenter()};
    ${appearanceNone()};
  `,
  Arrow: styled(ArrowDown)`
    ${simpleIcon("100%", "6px")};
    path {
      fill: ${variables.black};
    }
  `,
  Placeholder: styled.span`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: ${props => (props.disabled ? "500" : "bold")};
    position: relative;
    z-index: 1;
    color: ${props => (props.disabled ? variables.disabled : variables.black)};
    padding: 0 16px;
    border-radius: 2px;
    border: 1px solid
      ${props => (props.open ? variables.accent : variables.border)};
    cursor: pointer;
    background-color: transparent;
    &:hover {
      border-color: ${props =>
        props.disabled
          ? variables.border
          : props.open
          ? variables.accent
          : "#a5b3c5"};
    }
  `,
  Scrollbar: styled(Scrollbar)`
    display: ${props => (props.open ? "block" : "none")};
    position: absolute !important;
    z-index: 1;
    top: 100%;
    left: 0;
    height: ${props => props.count * 40 + 10}px !important;
    max-height: 210px !important;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.16);
    overflow: hidden;
    .ScrollbarsCustom {
      &-TrackY {
        width: 4px !important;
        background-color: transparent !important;
        right: 6px !important;
      }
      &-ThumbY {
        width: 4px !important;
        background-color: ${variables.border}!important;
      }
      &-Wrapper {
        position: initial !important;
      }
      &-Content {
        padding: 0 !important;
      }
    }
  `,
  List: styled.ul`
    display: block;
    width: 100%;
    background-color: white;
    padding: 5px 0;
  `,
  ListItem: styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 12px 16px;
    font-size: 14px;
    color: ${variables.black};
    cursor: pointer;
    &:hover {
      background-color: #f5f7fa;
    }
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
  `
};

export { Style };
