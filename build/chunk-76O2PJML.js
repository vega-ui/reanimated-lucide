import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgZoomIn = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 11, cy: 11, r: 8 }),
      /* @__PURE__ */ jsx("line", { x1: 21, x2: 16.65, y1: 21, y2: 16.65 }),
      /* @__PURE__ */ jsx("line", { x1: 11, x2: 11, y1: 8, y2: 14 }),
      /* @__PURE__ */ jsx("line", { x1: 8, x2: 14, y1: 11, y2: 11 })
    ]
  }
);
var ZoomIn_default = SvgZoomIn;

export { ZoomIn_default };
