import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgDecimalsArrowRight = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 18h10", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m17 21 3-3-3-3",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M3 11h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { x: 15, y: 3, width: 5, height: 8, rx: 2.5 }),
      /* @__PURE__ */ jsx("rect", { x: 6, y: 3, width: 5, height: 8, rx: 2.5 })
    ]
  }
);
var DecimalsArrowRight_default = SvgDecimalsArrowRight;

export { DecimalsArrowRight_default };
