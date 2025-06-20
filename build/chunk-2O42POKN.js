import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgShare2 = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 5, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 12, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 19, r: 3 }),
      /* @__PURE__ */ jsx("line", { x1: 8.59, x2: 15.42, y1: 13.51, y2: 17.49 }),
      /* @__PURE__ */ jsx("line", { x1: 15.41, x2: 8.59, y1: 6.51, y2: 10.49 })
    ]
  }
);
var Share2_default = SvgShare2;

export { Share2_default };
