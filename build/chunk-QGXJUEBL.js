import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgFileLock2 = ({
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
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14 2v4a2 2 0 0 0 2 2h4",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 8, height: 5, x: 2, y: 13, rx: 1 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M8 13v-2a2 2 0 1 0-4 0v2",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var FileLock2_default = SvgFileLock2;

export { FileLock2_default };
