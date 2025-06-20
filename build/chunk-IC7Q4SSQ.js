import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSlidersHorizontal = ({
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
      /* @__PURE__ */ jsx("line", { x1: 21, x2: 14, y1: 4, y2: 4 }),
      /* @__PURE__ */ jsx("line", { x1: 10, x2: 3, y1: 4, y2: 4 }),
      /* @__PURE__ */ jsx("line", { x1: 21, x2: 12, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 3, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 21, x2: 16, y1: 20, y2: 20 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 3, y1: 20, y2: 20 }),
      /* @__PURE__ */ jsx("line", { x1: 14, x2: 14, y1: 2, y2: 6 }),
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 8, y1: 10, y2: 14 }),
      /* @__PURE__ */ jsx("line", { x1: 16, x2: 16, y1: 18, y2: 22 })
    ]
  }
);
var SlidersHorizontal_default = SvgSlidersHorizontal;

export { SlidersHorizontal_default };
