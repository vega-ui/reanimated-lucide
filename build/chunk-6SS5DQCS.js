import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgChartScatter = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 7.5, cy: 7.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx("circle", { cx: 18.5, cy: 5.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx("circle", { cx: 11.5, cy: 11.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx("circle", { cx: 7.5, cy: 16.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx("circle", { cx: 17.5, cy: 14.5, r: 0.5, fill: "currentColor" }),
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
var ChartScatter_default = SvgChartScatter;

export { ChartScatter_default };
