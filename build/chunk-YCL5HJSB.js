import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgDatabaseZap = ({
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
      /* @__PURE__ */ jsx("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3 5V19A9 3 0 0 0 15 21.84",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M21 5V8", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M21 12L18 17H22L19 22",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3 12A9 3 0 0 0 14.59 14.87",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var DatabaseZap_default = SvgDatabaseZap;

export { DatabaseZap_default };
