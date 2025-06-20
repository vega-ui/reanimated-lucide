import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgNavigation = ({
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
    children: /* @__PURE__ */ jsx("polygon", { points: "3 11 22 2 13 21 11 13 3 11" })
  }
);
var Navigation_default = SvgNavigation;

export { Navigation_default };
