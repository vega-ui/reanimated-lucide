import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCodepen = ({
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
      /* @__PURE__ */ jsx("polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 22, y2: 15.5 }),
      /* @__PURE__ */ jsx("polyline", { points: "22 8.5 12 15.5 2 8.5" }),
      /* @__PURE__ */ jsx("polyline", { points: "2 15.5 12 8.5 22 15.5" }),
      /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 2, y2: 8.5 })
    ]
  }
);
var Codepen_default = SvgCodepen;

export { Codepen_default };
