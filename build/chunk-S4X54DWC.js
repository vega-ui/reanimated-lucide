import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgRockingChair = ({
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
      /* @__PURE__ */ jsx("polyline", { points: "3.5 2 6.5 12.5 18 12.5" }),
      /* @__PURE__ */ jsx("line", { x1: 9.5, x2: 5.5, y1: 12.5, y2: 20 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 18.5, y1: 12.5, y2: 20 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M2.75 18a13 13 0 0 0 18.5 0",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var RockingChair_default = SvgRockingChair;

export { RockingChair_default };
