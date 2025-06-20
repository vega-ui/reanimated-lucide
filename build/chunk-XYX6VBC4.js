import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgFrame = ({
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
      /* @__PURE__ */ jsx("line", { x1: 22, x2: 2, y1: 6, y2: 6 }),
      /* @__PURE__ */ jsx("line", { x1: 22, x2: 2, y1: 18, y2: 18 }),
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 6, y1: 2, y2: 22 }),
      /* @__PURE__ */ jsx("line", { x1: 18, x2: 18, y1: 2, y2: 22 })
    ]
  }
);
var Frame_default = SvgFrame;

export { Frame_default };
