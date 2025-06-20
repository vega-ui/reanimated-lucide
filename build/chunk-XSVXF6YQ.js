import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBubbles = ({
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
          d: "M7.2 14.8a2 2 0 0 1 2 2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 18.5, cy: 8.5, r: 3.5 }),
      /* @__PURE__ */ jsx("circle", { cx: 7.5, cy: 16.5, r: 5.5 }),
      /* @__PURE__ */ jsx("circle", { cx: 7.5, cy: 4.5, r: 2.5 })
    ]
  }
);
var Bubbles_default = SvgBubbles;

export { Bubbles_default };
