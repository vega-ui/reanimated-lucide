import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgPercent = ({
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
      /* @__PURE__ */ jsx("line", { x1: 19, x2: 5, y1: 5, y2: 19 }),
      /* @__PURE__ */ jsx("circle", { cx: 6.5, cy: 6.5, r: 2.5 }),
      /* @__PURE__ */ jsx("circle", { cx: 17.5, cy: 17.5, r: 2.5 })
    ]
  }
);
var Percent_default = SvgPercent;

export { Percent_default };
