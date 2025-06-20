import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBanknote = ({
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
      /* @__PURE__ */ jsx("rect", { width: 20, height: 12, x: 2, y: 6, rx: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M6 12h.01M18 12h.01",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Banknote_default = SvgBanknote;

export { Banknote_default };
