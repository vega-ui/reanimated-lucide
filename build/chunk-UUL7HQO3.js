import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgArchiveX = ({
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
      /* @__PURE__ */ jsx("rect", { width: 20, height: 5, x: 2, y: 3, rx: 1 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m9.5 17 5-5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m9.5 12 5 5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var ArchiveX_default = SvgArchiveX;

export { ArchiveX_default };
