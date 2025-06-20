import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgShowerHead = ({
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
          d: "m4 4 2.5 2.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M13.5 6.5a4.95 4.95 0 0 0-7 7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M15 5 5 15", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 17v.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 16v.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M13 13v.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M16 10v.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M11 20v.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M17 14v.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M20 11v.01", animatedProps, ...pathProps })
    ]
  }
);
var ShowerHead_default = SvgShowerHead;

export { ShowerHead_default };
