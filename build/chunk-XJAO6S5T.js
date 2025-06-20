import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGamepad = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  AnimatedSvg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    animatedProps,
    ref,
    width: size,
    height: size,
    stroke: color,
    strokeWidth,
    ...props,
    children: [
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 10, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 8, y1: 10, y2: 14 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 15.01, y1: 13, y2: 13 }),
      /* @__PURE__ */ jsx("line", { x1: 18, x2: 18.01, y1: 11, y2: 11 }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 12, x: 2, y: 6, rx: 2 })
    ]
  }
);
var Gamepad_default = SvgGamepad;

export { Gamepad_default };
