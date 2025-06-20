import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgTablets = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 7, cy: 7, r: 5 }),
      /* @__PURE__ */ jsx("circle", { cx: 17, cy: 17, r: 5 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 17h10", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m3.46 10.54 7.08-7.08",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Tablets_default = SvgTablets;

export { Tablets_default };
