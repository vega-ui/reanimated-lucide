import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCurrency = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 8 }),
      /* @__PURE__ */ jsx("line", { x1: 3, x2: 6, y1: 3, y2: 6 }),
      /* @__PURE__ */ jsx("line", { x1: 21, x2: 18, y1: 3, y2: 6 }),
      /* @__PURE__ */ jsx("line", { x1: 3, x2: 6, y1: 21, y2: 18 }),
      /* @__PURE__ */ jsx("line", { x1: 21, x2: 18, y1: 21, y2: 18 })
    ]
  }
);
var Currency_default = SvgCurrency;

export { Currency_default };
