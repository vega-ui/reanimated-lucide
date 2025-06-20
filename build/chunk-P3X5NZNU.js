import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgUserSearch = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 10, cy: 7, r: 4 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M10.3 15H7a4 4 0 0 0-4 4v2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 17, cy: 17, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m21 21-1.9-1.9",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var UserSearch_default = SvgUserSearch;

export { UserSearch_default };
