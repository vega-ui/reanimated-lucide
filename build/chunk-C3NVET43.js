import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgListFilterPlus = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 18h4", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M11 6H3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M15 6h6", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M18 9V3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M7 12h8", animatedProps, ...pathProps })
    ]
  }
);
var ListFilterPlus_default = SvgListFilterPlus;

export { ListFilterPlus_default };
