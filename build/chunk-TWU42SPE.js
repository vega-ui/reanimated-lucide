import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLaugh = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })
    ]
  }
);
var Laugh_default = SvgLaugh;

export { Laugh_default };
