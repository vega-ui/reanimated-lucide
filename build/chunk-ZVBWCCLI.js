import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgDoorClosedLocked = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 12h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M2 20h8", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M20 17v-2a2 2 0 1 0-4 0v2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { x: 14, y: 17, width: 8, height: 5, rx: 1 })
    ]
  }
);
var DoorClosedLocked_default = SvgDoorClosedLocked;

export { DoorClosedLocked_default };
