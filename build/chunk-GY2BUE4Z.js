import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSlidersVertical = ({
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
      /* @__PURE__ */ jsx("line", { x1: 4, x2: 4, y1: 21, y2: 14 }),
      /* @__PURE__ */ jsx("line", { x1: 4, x2: 4, y1: 10, y2: 3 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 21, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 8, y2: 3 }),
      /* @__PURE__ */ jsx("line", { x1: 20, x2: 20, y1: 21, y2: 16 }),
      /* @__PURE__ */ jsx("line", { x1: 20, x2: 20, y1: 12, y2: 3 }),
      /* @__PURE__ */ jsx("line", { x1: 2, x2: 6, y1: 14, y2: 14 }),
      /* @__PURE__ */ jsx("line", { x1: 10, x2: 14, y1: 8, y2: 8 }),
      /* @__PURE__ */ jsx("line", { x1: 18, x2: 22, y1: 16, y2: 16 })
    ]
  }
);
var SlidersVertical_default = SvgSlidersVertical;

export { SlidersVertical_default };
