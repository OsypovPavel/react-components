import styled from "styled-components";
import { variables } from "@assets/style/tools/variables";
import {
  flexCenter,
  setSize
} from "@assets/style/tools/mixin";

const Style = {
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
