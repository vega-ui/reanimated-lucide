import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgServer = ({
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
      /* @__PURE__ */ jsx("rect", { width: 20, height: 8, x: 2, y: 2, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 8, x: 2, y: 14, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 6.01, y1: 6, y2: 6 }),
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 6.01, y1: 18, y2: 18 })
    ]
  }
);
var Server_default = SvgServer;

export { Server_default };
