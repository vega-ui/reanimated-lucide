import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMonitor = ({
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
      /* @__PURE__ */ jsx("rect", { width: 20, height: 14, x: 2, y: 3, rx: 2 }),
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 16, y1: 21, y2: 21 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 17, y2: 21 })
    ]
  }
);
var Monitor_default = SvgMonitor;

export { Monitor_default };
