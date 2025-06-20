import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgWaypoints = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 4.5, r: 2.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m10.2 6.3-3.9 3.9",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 4.5, cy: 12, r: 2.5 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M7 12h10", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("circle", { cx: 19.5, cy: 12, r: 2.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m13.8 17.7 3.9-3.9",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 19.5, r: 2.5 })
    ]
  }
);
var Waypoints_default = SvgWaypoints;

export { Waypoints_default };
