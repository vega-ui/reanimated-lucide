import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgScissors = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M8.12 8.12 12 12",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M20 4 8.12 15.88",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14.8 14.8 20 20",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Scissors_default = SvgScissors;

export { Scissors_default };
