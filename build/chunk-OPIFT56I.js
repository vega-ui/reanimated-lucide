import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSpline = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 19, cy: 5, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 5, cy: 19, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M5 17A12 12 0 0 1 17 5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Spline_default = SvgSpline;

export { Spline_default };
