import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgRadioReceiver = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M5 16v2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M19 16v2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 8, x: 2, y: 8, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M18 12h.01", animatedProps, ...pathProps })
    ]
  }
);
var RadioReceiver_default = SvgRadioReceiver;

export { RadioReceiver_default };
