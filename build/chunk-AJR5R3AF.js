import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGlasses = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 15, r: 4 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 15, r: 4 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Glasses_default = SvgGlasses;

export { Glasses_default };
