import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLockKeyhole = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 16, r: 1 }),
      /* @__PURE__ */ jsx("rect", { x: 3, y: 10, width: 18, height: 12, rx: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M7 10V7a5 5 0 0 1 10 0v3",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var LockKeyhole_default = SvgLockKeyhole;

export { LockKeyhole_default };
