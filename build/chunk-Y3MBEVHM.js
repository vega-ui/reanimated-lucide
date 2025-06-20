import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgPawPrint = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 11, cy: 4, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 8, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 16, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var PawPrint_default = SvgPawPrint;

export { PawPrint_default };
