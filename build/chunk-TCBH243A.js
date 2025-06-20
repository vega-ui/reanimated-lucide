import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSmartphoneNfc = ({
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
      /* @__PURE__ */ jsx("rect", { width: 7, height: 12, x: 2, y: 6, rx: 1 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M13 8.32a7.43 7.43 0 0 1 0 7.36",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var SmartphoneNfc_default = SvgSmartphoneNfc;

export { SmartphoneNfc_default };
