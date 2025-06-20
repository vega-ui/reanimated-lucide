import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgDock = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M2 8h20", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M6 16h12", animatedProps, ...pathProps })
    ]
  }
);
var Dock_default = SvgDock;

export { Dock_default };
