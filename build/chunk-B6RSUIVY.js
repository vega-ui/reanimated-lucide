import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgPackageSearch = ({
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
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m7.5 4.27 9 5.15",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("polyline", { points: "3.29 7 12 12 20.71 7" }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 22, y2: 12 }),
      /* @__PURE__ */ jsx("circle", { cx: 18.5, cy: 15.5, r: 2.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M20.27 17.27 22 19",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var PackageSearch_default = SvgPackageSearch;

export { PackageSearch_default };
