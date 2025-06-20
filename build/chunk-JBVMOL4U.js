import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgWholeWord = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 7, cy: 12, r: 3 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 9v6", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("circle", { cx: 17, cy: 12, r: 3 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 7v8", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var WholeWord_default = SvgWholeWord;

export { WholeWord_default };
