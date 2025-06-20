import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLayoutTemplate = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 7, x: 3, y: 3, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { width: 9, height: 7, x: 3, y: 14, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { width: 5, height: 7, x: 16, y: 14, rx: 1 })
    ]
  }
);
var LayoutTemplate_default = SvgLayoutTemplate;

export { LayoutTemplate_default };
