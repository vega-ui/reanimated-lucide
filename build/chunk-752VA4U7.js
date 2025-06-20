import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignEndVertical = ({
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
      /* @__PURE__ */ jsx("rect", { width: 16, height: 6, x: 2, y: 4, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 9, height: 6, x: 9, y: 14, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M22 22V2", animatedProps, ...pathProps })
    ]
  }
);
var AlignEndVertical_default = SvgAlignEndVertical;

export { AlignEndVertical_default };
