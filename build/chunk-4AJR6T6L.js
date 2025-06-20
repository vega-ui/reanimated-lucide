import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgDiameter = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 19, cy: 19, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 5, cy: 5, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M6.48 3.66a10 10 0 0 1 13.86 13.86",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m6.41 6.41 11.18 11.18",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3.66 6.48a10 10 0 0 0 13.86 13.86",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Diameter_default = SvgDiameter;

export { Diameter_default };
