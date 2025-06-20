import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMemoryStick = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M6 19v-3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 19v-3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 19v-3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M18 19v-3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M8 11V9", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M16 11V9", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 11V9", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M2 15h20", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var MemoryStick_default = SvgMemoryStick;

export { MemoryStick_default };
