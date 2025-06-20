import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgArrowBigLeft = ({
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
        d: "M18 15h-6v4l-7-7 7-7v4h6v6z",
        animatedProps,
        ...pathProps
      }
    )
  }
);
var ArrowBigLeft_default = SvgArrowBigLeft;

export { ArrowBigLeft_default };
