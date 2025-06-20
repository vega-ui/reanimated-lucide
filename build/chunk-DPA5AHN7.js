import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgImage = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
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
var Image_default = SvgImage;

export { Image_default };
