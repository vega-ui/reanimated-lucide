import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgTangent = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 17, cy: 4, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M15.59 5.41 5.41 15.59",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 4, cy: 17, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M12 22s-4-9-1.5-11.5S22 12 22 12",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Tangent_default = SvgTangent;

export { Tangent_default };
