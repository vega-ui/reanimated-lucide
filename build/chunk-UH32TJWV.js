import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSmartphoneCharging = ({
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
      /* @__PURE__ */ jsx("rect", { width: 14, height: 20, x: 5, y: 2, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M12.667 8 10 12h4l-2.667 4",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var SmartphoneCharging_default = SvgSmartphoneCharging;

export { SmartphoneCharging_default };
