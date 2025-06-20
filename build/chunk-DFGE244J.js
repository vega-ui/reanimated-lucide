import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSquareScissors = ({
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
      /* @__PURE__ */ jsx("rect", { width: 20, height: 20, x: 2, y: 2, rx: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 8, cy: 8, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M9.414 9.414 12 12",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14.8 14.8 18 18",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 8, cy: 16, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m18 6-8.586 8.586",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var SquareScissors_default = SvgSquareScissors;

export { SquareScissors_default };
