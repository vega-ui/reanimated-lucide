import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCrosshair = ({
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
      /* @__PURE__ */ jsx("line", { x1: 22, x2: 18, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 2, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 6, y2: 2 }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 22, y2: 18 })
    ]
  }
);
var Crosshair_default = SvgCrosshair;

export { Crosshair_default };
