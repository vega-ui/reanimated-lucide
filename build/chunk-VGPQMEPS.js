import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignVerticalSpaceBetween = ({
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
      /* @__PURE__ */ jsx("rect", { width: 14, height: 6, x: 5, y: 15, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 10, height: 6, x: 7, y: 3, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M2 21h20", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M2 3h20", animatedProps, ...pathProps })
    ]
  }
);
var AlignVerticalSpaceBetween_default = SvgAlignVerticalSpaceBetween;

export { AlignVerticalSpaceBetween_default };
