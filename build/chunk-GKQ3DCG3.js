import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMapPinX = ({
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
          d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 10, r: 3 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m21.5 15.5-5 5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m21.5 20.5-5-5",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var MapPinX_default = SvgMapPinX;

export { MapPinX_default };
