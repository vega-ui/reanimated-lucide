import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgChartNoAxesColumnIncreasing = ({
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
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 20, y2: 10 }),
      /* @__PURE__ */ jsx("line", { x1: 18, x2: 18, y1: 20, y2: 4 }),
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 6, y1: 20, y2: 16 })
    ]
  }
);
var ChartNoAxesColumnIncreasing_default = SvgChartNoAxesColumnIncreasing;

export { ChartNoAxesColumnIncreasing_default };
