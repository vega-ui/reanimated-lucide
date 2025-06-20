import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgDivide = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 6, r: 1 }),
      /* @__PURE__ */ jsx("line", { x1: 5, x2: 19, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 18, r: 1 })
    ]
  }
);
var Divide_default = SvgDivide;

export { Divide_default };
