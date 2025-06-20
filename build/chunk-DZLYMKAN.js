import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLocateFixed = ({
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
      /* @__PURE__ */ jsx("line", { x1: 2, x2: 5, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 19, x2: 22, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 2, y2: 5 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 19, y2: 22 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 7 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 3 })
    ]
  }
);
var LocateFixed_default = SvgLocateFixed;

export { LocateFixed_default };
