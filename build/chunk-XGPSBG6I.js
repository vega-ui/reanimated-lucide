import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgImageMinus = ({
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
          d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 16, x2: 22, y1: 5, y2: 5 }),
      /* @__PURE__ */ jsx("circle", { cx: 9, cy: 9, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var ImageMinus_default = SvgImageMinus;

export { ImageMinus_default };
