import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgChartCandlestick = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M9 5v4", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 4, height: 6, x: 7, y: 9, rx: 1 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M9 15v2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M17 3v2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 4, height: 8, x: 15, y: 5, rx: 1 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M17 13v3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3 3v16a2 2 0 0 0 2 2h16",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var ChartCandlestick_default = SvgChartCandlestick;

export { ChartCandlestick_default };
