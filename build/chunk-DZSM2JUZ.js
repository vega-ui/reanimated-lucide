import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgArrowUp01 = ({
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
          d: "m3 8 4-4 4 4",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M7 4v16", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { x: 15, y: 4, width: 4, height: 6, ry: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M17 20v-6h-2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M15 20h4", animatedProps, ...pathProps })
    ]
  }
);
var ArrowUp01_default = SvgArrowUp01;

export { ArrowUp01_default };
