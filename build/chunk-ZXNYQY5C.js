import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMails = ({
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
      /* @__PURE__ */ jsx("rect", { width: 16, height: 13, x: 6, y: 4, rx: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M2 8v11c0 1.1.9 2 2 2h14",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Mails_default = SvgMails;

export { Mails_default };
