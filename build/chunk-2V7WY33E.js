import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsx } from 'react/jsx-runtime';

var SvgThermometer = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx(
      AnimatedPath,
      {
        d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
        animatedProps,
        ...pathProps
      }
    )
  }
);
var Thermometer_default = SvgThermometer;

export { Thermometer_default };
