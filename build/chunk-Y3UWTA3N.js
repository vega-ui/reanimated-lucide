import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignEndHorizontal = ({
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
      /* @__PURE__ */ jsx("rect", { width: 6, height: 16, x: 4, y: 2, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 6, height: 9, x: 14, y: 9, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M22 22H2", animatedProps, ...pathProps })
    ]
  }
);
var AlignEndHorizontal_default = SvgAlignEndHorizontal;

export { AlignEndHorizontal_default };
