import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSmilePlus = ({
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
          d: "M22 11v1a10 10 0 1 1-9-10",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M8 14s1.5 2 4 2 4-2 4-2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M16 5h6", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M19 2v6", animatedProps, ...pathProps })
    ]
  }
);
var SmilePlus_default = SvgSmilePlus;

export { SmilePlus_default };
