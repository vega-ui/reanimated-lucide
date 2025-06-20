import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCylinder = ({
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
      /* @__PURE__ */ jsx("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3 5v14a9 3 0 0 0 18 0V5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Cylinder_default = SvgCylinder;

export { Cylinder_default };
