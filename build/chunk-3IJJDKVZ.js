import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGrape = ({
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
          d: "M22 5V2l-5.89 5.89",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 16.6, cy: 15.89, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 8.11, cy: 7.4, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 12.35, cy: 11.65, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 13.91, cy: 5.85, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 18.15, cy: 10.09, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 6.56, cy: 13.2, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 10.8, cy: 17.44, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 5, cy: 19, r: 3 })
    ]
  }
);
var Grape_default = SvgGrape;

export { Grape_default };
