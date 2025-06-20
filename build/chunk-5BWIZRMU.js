import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCone = ({
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
          d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("ellipse", { cx: 12, cy: 19, rx: 9, ry: 3 })
    ]
  }
);
var Cone_default = SvgCone;

export { Cone_default };
