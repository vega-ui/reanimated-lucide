import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgNavigationOff = ({
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
          d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M17.39 11.73 22 2l-9.73 4.61",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 2, x2: 22, y1: 2, y2: 22 })
    ]
  }
);
var NavigationOff_default = SvgNavigationOff;

export { NavigationOff_default };
