import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgChevronRight = ({
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
    children: /* @__PURE__ */ jsx(
      AnimatedPath,
      {
        d: "m9 18 6-6-6-6",
        animatedProps,
        ...pathProps
      }
    )
  }
);
var ChevronRight_default = SvgChevronRight;

export { ChevronRight_default };
