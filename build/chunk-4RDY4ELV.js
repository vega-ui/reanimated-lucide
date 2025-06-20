import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgNetwork = ({
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
      /* @__PURE__ */ jsx("rect", { x: 16, y: 16, width: 6, height: 6, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { x: 2, y: 16, width: 6, height: 6, rx: 1 }),
      /* @__PURE__ */ jsx("rect", { x: 9, y: 2, width: 6, height: 6, rx: 1 }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 12V8", animatedProps, ...pathProps })
    ]
  }
);
var Network_default = SvgNetwork;

export { Network_default };
