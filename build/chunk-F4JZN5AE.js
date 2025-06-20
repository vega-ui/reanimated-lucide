import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBetweenVerticalEnd = ({
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
      /* @__PURE__ */ jsx("rect", { width: 7, height: 13, x: 3, y: 3, rx: 1 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m9 22 3-3 3 3",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 7, height: 13, x: 14, y: 3, rx: 1 })
    ]
  }
);
var BetweenVerticalEnd_default = SvgBetweenVerticalEnd;

export { BetweenVerticalEnd_default };
