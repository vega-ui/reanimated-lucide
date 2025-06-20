import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMailSearch = ({
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
          d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 18, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m22 22-1.5-1.5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var MailSearch_default = SvgMailSearch;

export { MailSearch_default };
