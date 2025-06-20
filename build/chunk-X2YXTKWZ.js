import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSquareUser = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 10, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var SquareUser_default = SvgSquareUser;

export { SquareUser_default };
