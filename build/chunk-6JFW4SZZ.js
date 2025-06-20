import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgRectangleVertical = ({
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
    children: /* @__PURE__ */ jsx("rect", { width: 12, height: 20, x: 6, y: 2, rx: 2 })
  }
);
var RectangleVertical_default = SvgRectangleVertical;

export { RectangleVertical_default };
