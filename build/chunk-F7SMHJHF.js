import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGitBranch = ({
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
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 6, y1: 3, y2: 15 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 9a9 9 0 0 1-9 9",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var GitBranch_default = SvgGitBranch;

export { GitBranch_default };
