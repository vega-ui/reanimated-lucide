import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSquareDivide = ({
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
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 16, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 16, y2: 16 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 8, y2: 8 })
    ]
  }
);
var SquareDivide_default = SvgSquareDivide;

export { SquareDivide_default };
