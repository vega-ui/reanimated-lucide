import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSun = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 4 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 2v2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 20v2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m4.93 4.93 1.41 1.41",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m17.66 17.66 1.41 1.41",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M2 12h2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M20 12h2", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m6.34 17.66-1.41 1.41",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m19.07 4.93-1.41 1.41",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Sun_default = SvgSun;

export { Sun_default };
