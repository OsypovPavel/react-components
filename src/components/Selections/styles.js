import styled from "styled-components";
import { variables } from "@assets/style/tools/variables";
import { setWidth, simpleIcon } from "@assets/style/tools/mixin";
import { Close } from "@icons/Svg/Close";

const Style = {
  List: styled.nav`
    display: flex;
    flex-wrap: wrap;
    ${setWidth("100%")};
    margin-top: 15px;
    margin-bottom: ${props => props.mb || "0"};
  `,
  Item: styled.li`
    display: flex;
    align-items: center;
    width: max-content;
    flex: 0 max-content;
    max-width: 100%;
    font-size: 12px;
    color: ${variables.black};
    cursor: pointer;
    border-radius: 100px;
    padding: 2px;
    margin-right: 12px;
    &:hover {
      text-decoration: underline;
    }
  `,
  Close: styled(Close)`
    ${simpleIcon("6px")};
    margin-left: 5px;
    path {
      fill: black;
    }
  `
};

export { Style };
