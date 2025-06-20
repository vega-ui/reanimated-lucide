import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgHand = ({
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
          d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Hand_default = SvgHand;

export { Hand_default };
