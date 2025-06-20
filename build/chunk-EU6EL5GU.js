import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGitFork = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 6, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 12v3", animatedProps, ...pathProps })
    ]
  }
);
var GitFork_default = SvgGitFork;

export { GitFork_default };
