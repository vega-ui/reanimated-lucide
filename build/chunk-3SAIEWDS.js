import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgVibrateOff = ({
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
          d: "m2 8 2 2-2 2 2 2-2 2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m22 8-2 2 2 2-2 2 2 2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 2, x2: 22, y1: 2, y2: 22 })
    ]
  }
);
var VibrateOff_default = SvgVibrateOff;

export { VibrateOff_default };
