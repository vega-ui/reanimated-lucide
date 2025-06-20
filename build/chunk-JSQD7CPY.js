import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgPi = ({
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
      /* @__PURE__ */ jsx("line", { x1: 9, x2: 9, y1: 4, y2: 20 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M4 7c0-1.7 1.3-3 3-3h13",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 20c-1.7 0-3-1.3-3-3V4",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Pi_default = SvgPi;

export { Pi_default };
