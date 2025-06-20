import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgBoomBox = ({
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
          d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M8 8v1", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 8v1", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M16 8v1", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 12, x: 2, y: 9, rx: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 8, cy: 15, r: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 16, cy: 15, r: 2 })
    ]
  }
);
var BoomBox_default = SvgBoomBox;

export { BoomBox_default };
