import styled from "styled-components";
import {
  setSize,
  setHeight,
  appearanceNone,
  simpleIcon
} from "@assets/style/tools/mixin";
import { variables } from "@assets/style/tools/variables";
import { ArrowUp } from "@icons/Svg/ArrowUp";
import { ArrowDown } from "@icons/Svg/ArrowDown";

const Wrap = styled.div`
  display: flex;
  ${setSize("84px", "35px")};
  border-radius: 4px;
  background-color: ${variables.white};
  border: 1px solid ${variables.blue};
  overflow: hidden;
  ${props => (props.disabled ? "*{cursor: pointer!important}" : "")}
  &.is--empty {
    border-color: #e7ecf1;
    .btn--group {
      border-color: #e7ecf1;
    }
    .btn--icon {
      path {
        fill: #78899f;
      }
    }
    .field {
      color: #9297a2;
    }
  }
`;
const Input = styled.input`
  display: block;
  color: ${variables.black};
  font-size: 16px;
  flex: 1;
  padding: 0 3px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: bold;
  background-color: white;
  ${appearanceNone()};
`;
const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${setSize("33px", "100%")};
  border-left: 1px solid ${variables.blue};
  position: relative;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 50%;
  ${setHeight("50%")};
  background-color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none !important;
  ${appearanceNone()};
  &:first-child {
    padding-top: 3px;
  }
  &:last-child {
    padding-bottom: 3px;
  }
  &:hover {
    background-color: #f8f8f8;
  }
  &:active {
    background-color: #ecf5f8;
  }
`;
const iconStyle = `
  ${simpleIcon("100%", "5px")};
  path {
    fill: ${variables.blue}
  }
`;
const IconUp = styled(ArrowUp)`
  ${iconStyle}
`;
const IconDown = styled(ArrowDown)`
  ${iconStyle}
`;
export { Wrap, Input, BtnGroup, Button, IconUp, IconDown };
