import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBike = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 18.5, cy: 17.5, r: 3.5 }),
      /* @__PURE__ */ jsx("circle", { cx: 5.5, cy: 17.5, r: 3.5 }),
      /* @__PURE__ */ jsx("circle", { cx: 15, cy: 5, r: 1 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M12 17.5V14l-3-3 4-3 2 3h2",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Bike_default = SvgBike;

export { Bike_default };
