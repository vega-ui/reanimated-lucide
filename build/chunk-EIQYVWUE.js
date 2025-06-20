import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignHorizontalSpaceBetween = ({
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
      /* @__PURE__ */ jsx("rect", { width: 6, height: 14, x: 3, y: 5, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 6, height: 10, x: 15, y: 7, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M3 2v20", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M21 2v20", animatedProps, ...pathProps })
    ]
  }
);
var AlignHorizontalSpaceBetween_default = SvgAlignHorizontalSpaceBetween;

export { AlignHorizontalSpaceBetween_default };
