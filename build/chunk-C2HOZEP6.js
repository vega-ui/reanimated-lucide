import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgRadioTower = ({
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
          d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 9, r: 2 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M16.2 4.8c2 2 2.26 5.11.8 7.47",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M9.5 18h5", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m8 22 4-11 4 11",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var RadioTower_default = SvgRadioTower;

export { RadioTower_default };
