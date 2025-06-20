import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgPillBottle = ({
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
          d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 16, height: 5, x: 4, y: 2, rx: 1 })
    ]
  }
);
var PillBottle_default = SvgPillBottle;

export { PillBottle_default };
