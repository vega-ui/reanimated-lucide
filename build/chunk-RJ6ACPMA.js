import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgHash = ({
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
      /* @__PURE__ */ jsx("line", { x1: 4, x2: 20, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx("line", { x1: 4, x2: 20, y1: 15, y2: 15 }),
      /* @__PURE__ */ jsx("line", { x1: 10, x2: 8, y1: 3, y2: 21 }),
      /* @__PURE__ */ jsx("line", { x1: 16, x2: 14, y1: 3, y2: 21 })
    ]
  }
);
var Hash_default = SvgHash;

export { Hash_default };
