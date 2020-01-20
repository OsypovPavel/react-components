import styled from "styled-components";
import { variables } from "../assets/style/tools/variables";
import { setSize, simpleIcon, transition } from "../assets/style/tools/mixin";

const Switch = {
  Wrap: styled.div`
    display: flex;
    cursor: pointer;
    flex: 1;
    ${props =>
      props.withTitle
        ? ""
        : `
      max-width: max-content;
      max-height: max-content;
    `}
  `,
  ButtonWrap: styled.div`
    display: block;
    position: relative;
    z-index: 1;
    ${setSize("44px", "24px")};
    background-color: #e1e8ee;
    border-radius: 50px;
    box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.1);
    ${props =>
      props.disabled
        ? ""
        : props.checked
        ? `
      background-color: ${variables.skyblue};
      .is--btn {
        left: 22px;
      }
    `
        : ""}
  `,
  Button: styled.i`
    ${simpleIcon("20px")};
    position: absolute;
    top: 2px;
    left: 2px;
    ${transition()};
    border: 1px solid #edf4ff;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.19);
    background-image: radial-gradient(
      160% 160% at 50% 50%,
      #ffffff 0%,
      #d2e2fa 100%
    );
    border-radius: 100%;
  `,
  Title: styled.span`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: ${variables.black};
    font-size: 14px;
    flex: 1;
    margin-left: 10px;
    letter-spacing: 0.6px;
    user-select: none;
  `,
  StatusTitle: styled.span`
    display: block;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    width: 100%;
    padding-top: 5px;
    font-size: 10px;
    color: ${props => (props.checked ? variables.skyblue : "#A8B0C3")};
    text-align: center;
    user-select: none !important;
  `
};

export { Switch };
