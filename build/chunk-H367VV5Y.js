import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgShip = ({
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
          d: "M12 10.189V14",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 2v3", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
          animatedProps,
          ...pathProps
        }
      )
    ]
  }
);
var Ship_default = SvgShip;

export { Ship_default };
