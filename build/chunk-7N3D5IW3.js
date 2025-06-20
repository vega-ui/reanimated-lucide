import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgFuel = ({
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
      /* @__PURE__ */ jsx("line", { x1: 3, x2: 15, y1: 22, y2: 22 }),
      /* @__PURE__ */ jsx("line", { x1: 4, x2: 14, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Fuel_default = SvgFuel;

export { Fuel_default };
