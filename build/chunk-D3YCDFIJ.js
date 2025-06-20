import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgSlack = ({
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
      /* @__PURE__ */ jsx("rect", { width: 3, height: 8, x: 13, y: 2, rx: 1.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 3, height: 8, x: 8, y: 14, rx: 1.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 8, height: 3, x: 14, y: 13, rx: 1.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("rect", { width: 8, height: 3, x: 2, y: 8, rx: 1.5 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Slack_default = SvgSlack;

export { Slack_default };
