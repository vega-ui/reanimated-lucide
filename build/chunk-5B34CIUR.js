import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLaptopMinimal = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 12, x: 3, y: 4, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx("line", { x1: 2, x2: 22, y1: 20, y2: 20 })
    ]
  }
);
var LaptopMinimal_default = SvgLaptopMinimal;

export { LaptopMinimal_default };
