import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSheet = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx("line", { x1: 3, x2: 21, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx("line", { x1: 3, x2: 21, y1: 15, y2: 15 }),
      /* @__PURE__ */ jsx("line", { x1: 9, x2: 9, y1: 9, y2: 21 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 15, y1: 9, y2: 21 })
    ]
  }
);
var Sheet_default = SvgSheet;

export { Sheet_default };
