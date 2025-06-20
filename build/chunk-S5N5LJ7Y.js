import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgWashingMachine = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M3 6h3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M17 6h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 18, height: 20, x: 3, y: 2, rx: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 13, r: 5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var WashingMachine_default = SvgWashingMachine;

export { WashingMachine_default };
