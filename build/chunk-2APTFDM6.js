import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgArrowBigDown = ({
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
        d: "M15 6v6h4l-7 7-7-7h4V6h6z",
        animatedProps,
        ...pathProps
      }
    )
  }
);
var ArrowBigDown_default = SvgArrowBigDown;

export { ArrowBigDown_default };
