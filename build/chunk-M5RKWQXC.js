import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgFactory = ({
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
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 16h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M16 16h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M8 16h.01", animatedProps, ...pathProps })
    ]
  }
);
var Factory_default = SvgFactory;

export { Factory_default };
