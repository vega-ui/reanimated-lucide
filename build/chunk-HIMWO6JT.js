import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgTimer = ({
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
      /* @__PURE__ */ jsx("line", { x1: 10, x2: 14, y1: 2, y2: 2 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 15, y1: 14, y2: 11 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 14, r: 8 })
    ]
  }
);
var Timer_default = SvgTimer;

export { Timer_default };
