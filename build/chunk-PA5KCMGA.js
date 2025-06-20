import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgCroissant = ({
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
          d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Croissant_default = SvgCroissant;

export { Croissant_default };
