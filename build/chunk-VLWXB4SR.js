import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMeh = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 16, y1: 15, y2: 15 }),
      /* @__PURE__ */ jsx("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })
    ]
  }
);
var Meh_default = SvgMeh;

export { Meh_default };
