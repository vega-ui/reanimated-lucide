import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignVerticalDistributeCenter = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M22 17h-3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M22 7h-5", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M5 17H2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M7 7H2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { x: 5, y: 14, width: 14, height: 6, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { x: 7, y: 4, width: 10, height: 6, rx: 2 })
    ]
  }
);
var AlignVerticalDistributeCenter_default = SvgAlignVerticalDistributeCenter;

export { AlignVerticalDistributeCenter_default };
