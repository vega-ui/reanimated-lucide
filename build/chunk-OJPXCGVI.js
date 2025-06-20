import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGitCommitHorizontal = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 3 }),
      /* @__PURE__ */ jsx("line", { x1: 3, x2: 9, y1: 12, y2: 12 }),
      /* @__PURE__ */ jsx("line", { x1: 15, x2: 21, y1: 12, y2: 12 })
    ]
  }
);
var GitCommitHorizontal_default = SvgGitCommitHorizontal;

export { GitCommitHorizontal_default };
