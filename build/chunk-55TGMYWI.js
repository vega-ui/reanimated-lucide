import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCameraOff = ({
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
          d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14.121 15.121A3 3 0 1 1 9.88 10.88",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var CameraOff_default = SvgCameraOff;

export { CameraOff_default };
