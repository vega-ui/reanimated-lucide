import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSendToBack = ({
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
      /* @__PURE__ */ jsx("rect", { x: 14, y: 14, width: 8, height: 8, rx: 2 }),
      /* @__PURE__ */ jsx("rect", { x: 2, y: 2, width: 8, height: 8, rx: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M7 14v1a2 2 0 0 0 2 2h1",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M14 7h1a2 2 0 0 1 2 2v1",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var SendToBack_default = SvgSendToBack;

export { SendToBack_default };
