import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSword = ({
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
      /* @__PURE__ */ jsx("polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }),
      /* @__PURE__ */ jsx("line", { x1: 13, x2: 19, y1: 19, y2: 13 }),
      /* @__PURE__ */ jsx("line", { x1: 16, x2: 20, y1: 16, y2: 20 }),
      /* @__PURE__ */ jsx("line", { x1: 19, x2: 21, y1: 21, y2: 19 })
    ]
  }
);
var Sword_default = SvgSword;

export { Sword_default };
