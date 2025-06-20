import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgDot = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("circle", { cx: 12.1, cy: 12.1, r: 1 })
  }
);
var Dot_default = SvgDot;

export { Dot_default };
