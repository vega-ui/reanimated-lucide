import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgChrome = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 4 }),
      /* @__PURE__ */ jsx("line", { x1: 21.17, x2: 12, y1: 8, y2: 8 }),
      /* @__PURE__ */ jsx("line", { x1: 3.95, x2: 8.54, y1: 6.06, y2: 14 }),
      /* @__PURE__ */ jsx("line", { x1: 10.88, x2: 15.46, y1: 21.94, y2: 14 })
    ]
  }
);
var Chrome_default = SvgChrome;

export { Chrome_default };
