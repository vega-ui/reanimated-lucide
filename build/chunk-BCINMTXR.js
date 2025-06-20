import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgLayoutList = ({
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
      /* @__PURE__ */ jsx("rect", { width: 7, height: 7, x: 3, y: 3, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { width: 7, height: 7, x: 3, y: 14, rx: 1 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 4h7", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 9h7", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 15h7", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 20h7", animatedProps, ...pathProps })
    ]
  }
);
var LayoutList_default = SvgLayoutList;

export { LayoutList_default };
