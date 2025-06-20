import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCodesandbox = ({
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
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }),
      /* @__PURE__ */ jsx("polyline", { points: "7.5 19.79 7.5 14.6 3 12" }),
      /* @__PURE__ */ jsx("polyline", { points: "21 12 16.5 14.6 16.5 19.79" }),
      /* @__PURE__ */ jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 22.08, y2: 12 })
    ]
  }
);
var Codesandbox_default = SvgCodesandbox;

export { Codesandbox_default };
