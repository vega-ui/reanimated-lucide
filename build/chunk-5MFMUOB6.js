import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLockKeyholeOpen = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 12, x: 3, y: 10, rx: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M7 10V7a5 5 0 0 1 9.33-2.5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var LockKeyholeOpen_default = SvgLockKeyholeOpen;

export { LockKeyholeOpen_default };
