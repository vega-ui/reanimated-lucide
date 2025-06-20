import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgItalic = ({
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
      /* @__PURE__ */ jsx("line", { x1: 19, x2: 10, y1: 4, y2: 4 }),
      /* @__PURE__ */ jsx("line", { x1: 14, x2: 5, y1: 20, y2: 20 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 9, y1: 4, y2: 20 })
    ]
  }
);
var Italic_default = SvgItalic;

export { Italic_default };
