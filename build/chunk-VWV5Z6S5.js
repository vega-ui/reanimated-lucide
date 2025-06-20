import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGitMerge = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M6 21V9a9 9 0 0 0 9 9",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var GitMerge_default = SvgGitMerge;

export { GitMerge_default };
