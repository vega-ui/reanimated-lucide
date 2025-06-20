import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgEqualNot = ({
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
      /* @__PURE__ */ jsx("line", { x1: 5, x2: 19, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx("line", { x1: 5, x2: 19, y1: 15, y2: 15 }),
      /* @__PURE__ */ jsx("line", { x1: 19, x2: 5, y1: 5, y2: 19 })
    ]
  }
);
var EqualNot_default = SvgEqualNot;

export { EqualNot_default };
