import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBaggageClaim = ({
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
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 13, height: 8, x: 8, y: 6, rx: 1 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 20, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 9, cy: 20, r: 2 })
    ]
  }
);
var BaggageClaim_default = SvgBaggageClaim;

export { BaggageClaim_default };
