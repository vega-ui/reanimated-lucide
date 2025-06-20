import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBellElectric = ({
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
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18.518 17.347A7 7 0 0 1 14 19",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18.8 4A11 11 0 0 1 20 9",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M9 9h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 16, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 9, cy: 9, r: 7 }),
      /* @__PURE__ */ jsx("rect", { x: 4, y: 16, width: 10, height: 6, rx: 2 })
    ]
  }
);
var BellElectric_default = SvgBellElectric;

export { BellElectric_default };
