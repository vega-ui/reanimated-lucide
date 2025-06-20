import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgMinus = ({
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
    children: /* @__PURE__ */ jsx(AnimatedPath, { d: "M5 12h14", animatedProps, ...pathProps })
  }
);
var Minus_default = SvgMinus;

export { Minus_default };
