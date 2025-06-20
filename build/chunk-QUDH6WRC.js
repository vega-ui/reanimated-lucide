import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignHorizontalDistributeCenter = ({
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
      /* @__PURE__ */ jsx("rect", { width: 6, height: 14, x: 4, y: 5, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 6, height: 10, x: 14, y: 7, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M17 22v-5", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M17 7V2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M7 22v-3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M7 5V2", animatedProps, ...pathProps })
    ]
  }
);
var AlignHorizontalDistributeCenter_default = SvgAlignHorizontalDistributeCenter;

export { AlignHorizontalDistributeCenter_default };
