import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLayoutDashboard = ({
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
      /* @__PURE__ */ jsx("rect", { width: 7, height: 9, x: 3, y: 3, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { width: 7, height: 5, x: 14, y: 3, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { width: 7, height: 9, x: 14, y: 12, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { width: 7, height: 5, x: 3, y: 16, rx: 1 })
    ]
  }
);
var LayoutDashboard_default = SvgLayoutDashboard;

export { LayoutDashboard_default };
