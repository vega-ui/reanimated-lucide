import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGitGraph = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 5, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M5 9v6", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("circle", { cx: 5, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 3v18", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("circle", { cx: 19, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M16 15.7A9 9 0 0 0 19 9",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var GitGraph_default = SvgGitGraph;

export { GitGraph_default };
