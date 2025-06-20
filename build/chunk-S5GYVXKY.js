import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgImageOff = ({
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
      /* @__PURE__ */ jsx("line", { x1: 2, x2: 22, y1: 2, y2: 22 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 13.5, x2: 6, y1: 13.5, y2: 21 }),
      /* @__PURE__ */ jsx("line", { x1: 18, x2: 21, y1: 12, y2: 15 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M21 15V5a2 2 0 0 0-2-2H9",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var ImageOff_default = SvgImageOff;

export { ImageOff_default };
