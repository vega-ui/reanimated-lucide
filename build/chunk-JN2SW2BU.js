import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgUserRoundSearch = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 10, cy: 8, r: 5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M2 21a8 8 0 0 1 10.434-7.62",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m22 22-1.9-1.9",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var UserRoundSearch_default = SvgUserRoundSearch;

export { UserRoundSearch_default };
