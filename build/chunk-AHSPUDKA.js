import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLock = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 11, x: 3, y: 11, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M7 11V7a5 5 0 0 1 10 0v4",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Lock_default = SvgLock;

export { Lock_default };
