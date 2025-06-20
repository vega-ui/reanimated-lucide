import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgUsersRound = ({
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
          d: "M18 21a8 8 0 0 0-16 0",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 10, cy: 8, r: 5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var UsersRound_default = SvgUsersRound;

export { UsersRound_default };
