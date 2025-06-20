import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGitCompareArrows = ({
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
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M12 6h5a2 2 0 0 1 2 2v7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m15 9-3-3 3-3",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 19, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M12 18H7a2 2 0 0 1-2-2V9",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m9 15 3 3-3 3",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var GitCompareArrows_default = SvgGitCompareArrows;

export { GitCompareArrows_default };
