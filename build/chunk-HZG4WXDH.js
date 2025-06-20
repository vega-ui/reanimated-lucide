import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgAlignHorizontalJustifyEnd = ({
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
      /* @__PURE__ */ jsx("rect", { width: 6, height: 14, x: 2, y: 5, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { width: 6, height: 10, x: 12, y: 7, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M22 2v20", animatedProps, ...pathProps })
    ]
  }
);
var AlignHorizontalJustifyEnd_default = SvgAlignHorizontalJustifyEnd;

export { AlignHorizontalJustifyEnd_default };
