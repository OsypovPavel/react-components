import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import localResolve from "rollup-plugin-local-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

const globals = {
  react: "React",
  "prop-types": "PropTypes",
  "react-scrollbars-custom": "Scrollbar",
  "styled-components": "styled",
  "react-input-mask": "InputMask",
  "rc-slider/lib/Range": "Range",
  "react-datepicker": "libDatePicker"
};

const plugins = [
  resolve({
    mainFields: ["module"],
    extensions: [".js", ".jsx"]
  }),
  external(),
  babel(),
  localResolve(),
  commonjs(),
  filesize(),
  terser()
];
const compile = path => {
  return {
    input: `src/${path}`,
    output: [
      {
        file: `lib/${path}.js`,
        name: path,
        format: "umd",
        globals
      }
    ],
    plugins,
    external: [
      "react-scrollbars-custom",
      "react-input-mask",
      "rc-slider",
      "rc-slider/lib/Range"
    ]
  };
};

const components = [
  "AutoComplete",
  "Button",
  "Checkbox",
  "Counter",
  "Field",
  "MultiSelect",
  "Search",
  "Select",
  "Selections",
  "Switcher",
  "RangeSlider",
  "index"
];

export default components.map(compile);
